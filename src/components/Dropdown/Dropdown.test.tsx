import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  test("renders the dropdown component", () => {
    render(<Dropdown options={["Option 1", "Option 2", "Option 3"]} />);
    const dropdownElement = screen.getByRole("combobox");
    expect(dropdownElement).toBeInTheDocument();
  });

  test("displays the correct options", () => {
    render(<Dropdown options={["Option 1", "Option 2", "Option 3"]} />);
    const optionElements = screen.getAllByRole("option");
    expect(optionElements).toHaveLength(3);
    expect(optionElements[0]).toHaveTextContent("Option 1");
    expect(optionElements[1]).toHaveTextContent("Option 2");
    expect(optionElements[2]).toHaveTextContent("Option 3");
  });
});
