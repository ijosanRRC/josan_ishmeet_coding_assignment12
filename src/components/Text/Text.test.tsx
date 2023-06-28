import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text Component", () => {
  test("renders the text component", () => {
    render(<Text text="Text Content" />);
    const textElement = screen.getByText("Text Content");
    expect(textElement).toBeInTheDocument();
  });
});


