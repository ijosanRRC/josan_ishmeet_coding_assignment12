import React from "react";
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("Radio Button Component", () => {
  test("renders the radio button component", () => {
    render(<RadioButton label="Option 1" value="option1" checked={false} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    } } />);
    const radioButtonElement = screen.getByRole("radio");
    expect(radioButtonElement).toBeInTheDocument();
  });

  test("renders the correct label", () => {
    render(<RadioButton label="Option 1" value="option1" checked={false} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    } } />);
    const labelElement = screen.getByText("Option 1");
    expect(labelElement).toBeInTheDocument();
  });

  test("changes state on selection", () => {
    render(<RadioButton label="Option 1" value="option1" checked={false} onChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
      throw new Error("Function not implemented.");
    } } />);
    const radioButtonElement = screen.getByRole("radio");
    expect(radioButtonElement).not.toBeChecked();
    radioButtonElement.click();
    expect(radioButtonElement).toBeChecked();
  });
});
