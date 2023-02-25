import userEvent from "@testing-library/user-event";
import { componentRender } from "shared/lib/tests/componentRender";
import { Input } from "./Input";

describe("Input", () => {
  const inputProps = {
    label: "Label",
    placeholder: "Placeholder",
  };

  test("render initial component", () => {
    const { getByLabelText } = componentRender(<Input {...inputProps} />);

    const inputElem = getByLabelText("Label");

    expect(inputElem).toBeInTheDocument();
    expect(inputElem).toHaveValue("");
  });

  test("should change value", () => {
    const { getByRole } = componentRender(<Input {...inputProps} />);

    const inputElem = getByRole("textbox");

    expect(inputElem).toHaveValue("");

    userEvent.type(inputElem, "hello world!");

    expect(inputElem).toHaveValue("hello world!");
  });
});

