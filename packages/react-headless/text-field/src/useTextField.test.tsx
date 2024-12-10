import "@testing-library/jest-dom/vitest";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { ReactElement } from "react";
import React, { useMemo } from "react";

import { useTextField, type UseTextFieldProps } from "./index";

afterEach(cleanup);

function setUp(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

type Assign<T, U> = Omit<T, keyof U> & U;

const TextField = (
  props: Assign<
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "children" | "maxLength">,
    UseTextFieldProps
  >,
) => {
  const {
    rootProps,
    inputProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    stateProps,
    restProps,
    graphemes,
    renderDescription,
    renderErrorMessage,
  } = useTextField(props);

  const { description, errorMessage, maxGraphemeCount } = props;

  return (
    <div {...rootProps} {...stateProps}>
      {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
      <label {...labelProps} data-testid="label" />
      <div {...stateProps}>
        <input {...inputProps} {...restProps} />
      </div>
      <div>
        {renderDescription && (
          <div {...descriptionProps} data-testid="description">
            {description}
          </div>
        )}
        {renderErrorMessage && (
          <div {...errorMessageProps} data-testid="error-message">
            <div>{errorMessage}</div>
          </div>
        )}
        <div data-testid="grapheme-count">
          <span {...stateProps}>{graphemes.length}</span>
          <span>/{maxGraphemeCount}</span>
        </div>
      </div>
    </div>
  );
};

function ControlledTextField(props: Omit<UseTextFieldProps, "value" | "onValueChange">) {
  const { defaultValue } = props;
  const [value, setValue] = React.useState(defaultValue);
  const mockSetValue = vi.fn(({ value }) => setValue(value));

  return <TextField value={value} onValueChange={mockSetValue} {...props} />;
}

function SlicingControlledTextField(props: Omit<UseTextFieldProps, "value" | "onValueChange">) {
  const { defaultValue } = props;
  const [value, setValue] = React.useState(defaultValue);
  const mockSliceSetValue = vi.fn(({ slicedValue }) => setValue(slicedValue));

  return <TextField value={value} onValueChange={mockSliceSetValue} {...props} />;
}

describe("useTextField", () => {
  describe("aria test", () => {
    it("should render the input with aria-invalid=true when isInvalid=true", () => {
      const { getByRole } = setUp(<TextField invalid />);
      const input = getByRole("textbox");

      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("should render the input with aria-required=true when isRequired=true", () => {
      const { getByRole } = setUp(<TextField required />);
      const input = getByRole("textbox");

      expect(input).toHaveAttribute("aria-required", "true");
    });

    it("should not render the input with aria-describedby when provided neither description nor errorMessage", () => {
      const { getByRole } = setUp(<TextField />);
      const input = getByRole("textbox");

      expect(input).not.toHaveAttribute("aria-describedby");
    });

    it("should not render the input with aria-describedby when errorMessage is provided without invalid=ture", () => {
      const { getByRole } = setUp(<TextField errorMessage="error" />);
      const input = getByRole("textbox");

      expect(input).not.toHaveAttribute("aria-describedby");
    });

    it("should render the input with aria-describedby when description is provided", () => {
      const { getByRole } = setUp(<TextField description="description" />);
      const input = getByRole("textbox");
      const ariaDescribedBy = input.getAttribute("aria-describedby");

      expect(ariaDescribedBy).toContain("description");
    });

    it("should render the input with only description's aria-describedby when errorMessage and description are provided", () => {
      const { getByRole } = setUp(<TextField errorMessage="error" description="description" />);
      const input = getByRole("textbox");
      const ariaDescribedBy = input.getAttribute("aria-describedby");

      expect(ariaDescribedBy).toContain("description");
    });

    it("should render the input with error and description's id as aria-describedby when errorMessage and description and invalid are provided, while hiding the description from the interface", () => {
      const { getByRole, getByTestId } = setUp(
        <TextField errorMessage="error" description="description" invalid />,
      );
      const input = getByRole("textbox");
      const description = getByTestId("description");
      const ariaDescribedBy = input.getAttribute("aria-describedby");

      expect(description.style.display).toBe("none");
      expect(ariaDescribedBy).toContain("error");
      expect(ariaDescribedBy).toContain("description");
    });
  });

  it("should render correctly", () => {
    const { getByRole } = setUp(<TextField />);
    const input = getByRole("textbox");

    expect(input).toHaveValue("");
  });

  it("should type correctly", async () => {
    const { getByRole, user } = setUp(<TextField />);
    const input = getByRole("textbox");

    expect(input).toHaveValue("");

    await user.type(input, "a");
    expect(input).toHaveValue("a");
  });

  it("should render `defaultValue` correctly", () => {
    const defaultValue = "abcde";
    const { getByRole } = setUp(<TextField defaultValue={defaultValue} />);
    const input = getByRole("textbox");

    expect(input).toHaveValue(defaultValue);
  });

  it("should autofocus correctly", () => {
    const { getByRole } = setUp(<TextField autoFocus />);
    const input = getByRole("textbox");

    expect(input).toHaveFocus();
  });

  it("should onValueChange be called", async () => {
    const handleValueChange = vi.fn();

    const { getByRole, user } = setUp(<TextField onValueChange={handleValueChange} />);
    const input = getByRole("textbox");

    await user.type(input, "a");
    expect(input).toHaveValue("a");
    expect(handleValueChange).toHaveBeenCalledWith({
      value: "a",
      graphemes: ["a"],
      slicedValue: "a",
      slicedGraphemes: ["a"],
    });
  });

  it("should onValueChange be called with proper values on maxGraphemeCount set", async () => {
    const handleValueChange = vi.fn();

    const timesToType = 10;
    const maxGrahemeCount = 5;

    const expectedValue = "a".repeat(timesToType);
    const expectedSlicedValue = "a".repeat(maxGrahemeCount);

    const { getByRole, user } = setUp(
      <TextField onValueChange={handleValueChange} maxGraphemeCount={maxGrahemeCount} />,
    );
    const input = getByRole("textbox");

    await user.type(input, "a".repeat(timesToType));
    // uncontrollable하므로 slicedValue로 set하지 않음. 10글자가 입력됨
    expect(input).toHaveValue("a".repeat(timesToType));
    expect(handleValueChange).toHaveBeenCalledWith({
      value: expectedValue,
      graphemes: expectedValue.split(""),
      slicedValue: expectedSlicedValue,
      slicedGraphemes: expectedSlicedValue.split(""),
    });
  });

  it("should set value from outside correctly (number formatting)", async () => {
    function NumberFormattedInput() {
      const [value, setValue] = React.useState("");

      const formattedValue = useMemo(() => {
        if (value === "") return value;

        const number = Number(value.replace(/,/g, ""));
        if (Number.isNaN(number)) return "";

        return number.toLocaleString();
      }, [value]);

      return (
        <TextField
          label="금액"
          placeholder="9,999,999"
          description="금액을 써주세요"
          value={formattedValue}
          onValueChange={({ value }) => setValue(value)}
        />
      );
    }

    const { getByRole, user } = setUp(<NumberFormattedInput />);
    const input = getByRole("textbox");

    await user.type(input, "11111111");
    expect(input).toHaveValue("11,111,111");
  });

  describe("graphemes test", () => {
    describe("graphemes test with uncontrolled", () => {
      it("should grapheme count 5 when type 5 text", async () => {
        const { getByRole, user } = setUp(<TextField />);
        const input = getByRole("textbox");

        input.focus();

        await user.type(input, "a".repeat(5));

        expect(input).toHaveAttribute("data-grapheme-count", "5");
      });

      it("should grapheme count 5 when type 5 emoji", async () => {
        const { getByRole, user } = setUp(<TextField />);
        const input = getByRole("textbox");

        input.focus();

        await user.type(input, "🥕".repeat(5));

        expect(input).toHaveAttribute("data-grapheme-count", "5");
      });
    });

    describe("graphemes test with controlled", () => {
      it("should grapheme count 5 when type 5 text", async () => {
        const { getByRole, user } = setUp(<ControlledTextField />);
        const input = getByRole("textbox");

        input.focus();

        await user.type(input, "a".repeat(5));

        expect(input).toHaveAttribute("data-grapheme-count", "5");
      });

      it("should grapheme count 5 when type 5 emoji", async () => {
        const { getByRole, user } = setUp(<ControlledTextField />);
        const input = getByRole("textbox");

        input.focus();

        await user.type(input, "🥕".repeat(5));

        expect(input).toHaveAttribute("data-grapheme-count", "5");
      });

      it("should grapheme count 10 when maxGraphemeCount is 10, type 15 text", async () => {
        const { getByRole, user } = setUp(<SlicingControlledTextField maxGraphemeCount={10} />);
        const input = getByRole("textbox");

        input.focus();

        await user.type(input, "a".repeat(15));

        expect(input).toHaveAttribute("data-grapheme-count", "10");
      });

      it("should grapheme count 10 when maxGraphemeCount is 10, type 15 emoji", async () => {
        const { getByRole, user } = setUp(<SlicingControlledTextField maxGraphemeCount={10} />);
        const input = getByRole("textbox");

        input.focus();

        await user.type(input, "🥕".repeat(15));

        expect(input).toHaveAttribute("data-grapheme-count", "10");
      });

      it("should grapheme count 10 when maxGraphemeCount is 10, type 15 emoji and text", async () => {
        const { getByRole, user } = setUp(<SlicingControlledTextField maxGraphemeCount={10} />);
        const input = getByRole("textbox");

        input.focus();

        await user.type(input, "a🥕a".repeat(5));

        expect(input).toHaveAttribute("data-grapheme-count", "10");
      });

      it("should slice correctly when paste over maxGraphemeCount", async () => {
        const { getByRole, user } = setUp(<SlicingControlledTextField maxGraphemeCount={12} />);
        const input = getByRole("textbox");

        const value = "a".repeat(10);
        await user.type(input, value);
        expect(input).toHaveValue(value);

        await user.paste("aaaaa");
        expect(input).toHaveValue(`${value}${"a".repeat(2)}`);
      });

      it("should slice correctly when paste over maxGraphemeCount with emoji", async () => {
        const maxGraphemeCount = 5;
        const { getByRole, user } = setUp(
          <SlicingControlledTextField maxGraphemeCount={maxGraphemeCount} />,
        );
        const input = getByRole("textbox");

        input.focus();

        await user.paste("🥕".repeat(4));
        await user.paste("🥕".repeat(4));

        expect(input).toHaveValue("🥕".repeat(maxGraphemeCount));
      });
    });
  });
});
