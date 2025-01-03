import "@testing-library/jest-dom/vitest";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import type * as React from "react";
import type { ReactElement } from "react";

import {
  CheckboxControl,
  CheckboxHiddenInput,
  CheckboxRoot,
  type CheckboxRootProps,
} from "./Checkbox";

afterEach(cleanup);

function setUp(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

function Checkbox(props: CheckboxRootProps) {
  return (
    <CheckboxRoot {...props}>
      <CheckboxControl />
      <CheckboxHiddenInput />
    </CheckboxRoot>
  );
}

describe("useCheckbox", () => {
  it("should render the checkbox correctly", () => {
    const { getByRole } = setUp(<Checkbox />);
    const checkbox = getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  it("should render the checkbox with defaultChecked=true", () => {
    const { getByRole } = setUp(<Checkbox defaultChecked={true} />);
    const checkbox = getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });

  it("should render the checkbox with defaultChecked=false", () => {
    const { getByRole } = setUp(<Checkbox defaultChecked={false} />);
    const checkbox = getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  it("should checked when clicked", async () => {
    const { getByRole, user } = setUp(<Checkbox />);
    const checkbox = getByRole("checkbox");

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("should onCheckedChange is called when clicked", async () => {
    const handleCheckedChange = vi.fn();

    const { getByRole, user } = setUp(<Checkbox onCheckedChange={handleCheckedChange} />);
    const checkbox = getByRole("checkbox");

    await user.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it("should hover state updates correctly", async () => {
    const { getByRole, user } = setUp(<Checkbox />);
    const checkbox = getByRole("checkbox");

    await user.hover(checkbox);
    expect(checkbox).toHaveAttribute("data-hover");

    await user.unhover(checkbox);
    expect(checkbox).not.toHaveAttribute("data-hover");
  });

  it("should focus state updates correctly", async () => {
    const { getByRole, user } = setUp(<Checkbox />);
    const checkbox = getByRole("checkbox");

    await user.click(checkbox);
    expect(checkbox).toHaveFocus();

    await user.click(document.body);
    expect(checkbox).not.toHaveFocus();
  });

  describe("disabled prop test", () => {
    it("should disabled when disabled prop is true", async () => {
      const { getByRole } = setUp(<Checkbox disabled={true} />);
      const checkbox = getByRole("checkbox");

      expect(checkbox).toBeDisabled();
    });

    it("should not change checked state when clicked", async () => {
      const { getByRole, user } = setUp(<Checkbox disabled={true} />);
      const checkbox = getByRole("checkbox");

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it("should not onCheckedChange be called when clicked", async () => {
      const handleCheckedChange = vi.fn();

      const { getByRole, user } = setUp(
        <Checkbox disabled={true} onCheckedChange={handleCheckedChange} />,
      );
      const checkbox = getByRole("checkbox");

      await user.click(checkbox);
      expect(handleCheckedChange).not.toHaveBeenCalled();
    });
  });

  describe("form integration", () => {
    it("should reset the checkbox state on form reset", async () => {
      const { getByRole, user } = setUp(
        <form>
          <Checkbox defaultChecked={true} />
          <button type="reset">Reset</button>
        </form>,
      );

      const checkbox = getByRole("checkbox");
      const resetButton = getByRole("button", { name: /reset/i });

      await user.click(checkbox);

      expect(checkbox).not.toBeChecked();

      await user.click(resetButton);

      expect(checkbox).toBeChecked();
    });
  });
});
