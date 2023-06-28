import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label Component", () => {
  test("renders the label component", () => {
    render(<Label text="Label Text" />);
    const labelElement = screen.getByText("Label Text");
    expect(labelElement).toBeInTheDocument();
  });
});
