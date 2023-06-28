import React from "react";
import { render, screen } from "@testing-library/react";
import TableFooter from "./TableFooter";

describe("TableFooter Component", () => {
  test("renders without error", () => {
    render(<TableFooter>Footer Content</TableFooter>);
    const footer = screen.getByText("Footer Content");
    expect(footer).toBeInTheDocument();
  });
});
