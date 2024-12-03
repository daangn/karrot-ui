import "@testing-library/jest-dom/vitest";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { ReactElement } from "react";
import * as React from "react";

import { useSegmentedControl, type SegmentItemProps, type UseSegmentedControlProps } from "./index";

/**
 * @see https://github.com/ZeeCoder/use-resize-observer/issues/40#issuecomment-644536259
 * useSize에서 사용하는 ResizeObserver를 mock으로 대체합니다.
 */
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

afterEach(cleanup);

function setUp(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const SegmentedControlContext = React.createContext<{
  api: ReturnType<typeof useSegmentedControl>;
} | null>(null);

const useSegmentedControlContext = () => {
  const context = React.useContext(SegmentedControlContext);
  if (!context) throw new Error("Segment cannot be rendered outside the SegmentedControl");

  return context;
};

type Assign<T, U> = Omit<T, keyof U> & U;

function SegmentedControl({
  children,
  ...otherProps
}: Assign<React.HTMLAttributes<HTMLDivElement>, UseSegmentedControlProps>) {
  const api = useSegmentedControl(otherProps);

  const { rootProps, restProps, indicatorProps } = api;

  return (
    <div {...rootProps} {...restProps}>
      <SegmentedControlContext.Provider value={{ api }}>
        {children}
      </SegmentedControlContext.Provider>
      <div aria-hidden {...indicatorProps} />
    </div>
  );
}

function Segment({
  children,
  value,
  ...otherProps
}: Assign<React.HTMLAttributes<HTMLLabelElement>, SegmentItemProps>) {
  const {
    api: { getSegmentProps },
  } = useSegmentedControlContext();

  const { rootProps, hiddenInputProps, stateProps } = getSegmentProps({ value });

  return (
    <label {...rootProps} {...otherProps}>
      <input {...hiddenInputProps} data-testid={value} />
      <div {...stateProps}>{children}</div>
    </label>
  );
}

function ControlledSegmentedControl(
  props: React.PropsWithChildren<Omit<UseSegmentedControlProps, "value" | "onValueChange">>,
) {
  const { defaultValue } = props;
  const [value, setValue] = React.useState(defaultValue);
  const mockSetValue = vi.fn((value) => setValue(value));

  return <SegmentedControl value={value} onValueChange={mockSetValue} {...props} />;
}

describe("useSegmentedControl", () => {
  window.ResizeObserver = ResizeObserver;

  const FIRST_VALUE = "first";
  const SECOND_VALUE = "second";
  const THIRD_VALUE = "third";
  const values = [FIRST_VALUE, SECOND_VALUE, THIRD_VALUE];

  it("should render correctly", () => {
    const { getByTestId } = setUp(
      <SegmentedControl defaultValue={values[0]}>
        {values.map((value) => (
          <Segment key={value} value={value} />
        ))}
      </SegmentedControl>,
    );

    for (const value of values) {
      const input = getByTestId(value);
      expect(input).toBeInTheDocument();
    }
  });

  it("should change value on click", async () => {
    const { user, getByTestId } = setUp(
      <SegmentedControl defaultValue={values[0]}>
        {values.map((value) => (
          <Segment key={value} value={value} />
        ))}
      </SegmentedControl>,
    );

    const firstControl = getByTestId(FIRST_VALUE);
    const secondControl = getByTestId(SECOND_VALUE);

    await user.click(secondControl);

    expect(firstControl).not.toHaveAttribute("checked");
    expect(secondControl).toHaveAttribute("checked");
  });

  it("should onValueChange be called", async () => {
    const handleValueChange = vi.fn();

    const { user, getByTestId } = setUp(
      <SegmentedControl defaultValue={values[0]} onValueChange={handleValueChange}>
        {values.map((value) => (
          <Segment key={value} value={value} />
        ))}
      </SegmentedControl>,
    );

    const secondControl = getByTestId(SECOND_VALUE);

    await user.click(secondControl);

    expect(handleValueChange).toHaveBeenCalledWith(SECOND_VALUE);
  });

  describe("disabled prop test", () => {
    window.ResizeObserver = ResizeObserver;

    it("should disabled when disabled prop is true", async () => {
      const { getByTestId } = setUp(
        <SegmentedControl defaultValue={values[0]} disabled>
          {values.map((value) => (
            <Segment key={value} value={value} />
          ))}
        </SegmentedControl>,
      );

      for (const value of values) {
        const input = getByTestId(value);
        expect(input).toHaveAttribute("disabled");
      }
    });

    it("should not change value on click when disabled", async () => {
      const { user, getByTestId } = setUp(
        <SegmentedControl disabled value={FIRST_VALUE}>
          {values.map((value) => (
            <Segment key={value} value={value} />
          ))}
        </SegmentedControl>,
      );

      const firstControl = getByTestId(FIRST_VALUE);
      const secondControl = getByTestId(SECOND_VALUE);

      await user.click(secondControl);

      expect(firstControl).toHaveAttribute("checked");
      expect(secondControl).not.toHaveAttribute("checked");
    });

    it("should not call onValueChange when disabled", async () => {
      const handleValueChange = vi.fn();

      const { user, getByTestId } = setUp(
        <SegmentedControl defaultValue={values[0]} disabled onValueChange={handleValueChange}>
          {values.map((value) => (
            <Segment key={value} value={value} />
          ))}
        </SegmentedControl>,
      );

      const secondControl = getByTestId(SECOND_VALUE);

      await user.click(secondControl);

      expect(handleValueChange).not.toHaveBeenCalled();
    });
  });

  describe("controlled test", () => {
    window.ResizeObserver = ResizeObserver;

    it("should render correctly with controlled value", () => {
      const { getByTestId } = setUp(
        <ControlledSegmentedControl defaultValue={SECOND_VALUE}>
          {values.map((value) => (
            <Segment key={value} value={value} />
          ))}
        </ControlledSegmentedControl>,
      );

      const secondControl = getByTestId(SECOND_VALUE);
      expect(secondControl).toHaveAttribute("checked");
    });

    it("should change value on click with controlled value", async () => {
      const { user, getByTestId } = setUp(
        <ControlledSegmentedControl>
          {values.map((value) => (
            <Segment key={value} value={value} />
          ))}
        </ControlledSegmentedControl>,
      );

      const firstControl = getByTestId(FIRST_VALUE);
      const secondControl = getByTestId(SECOND_VALUE);

      await user.click(secondControl);

      expect(firstControl).not.toHaveAttribute("checked");
      expect(secondControl).toHaveAttribute("checked");
    });
  });
});
