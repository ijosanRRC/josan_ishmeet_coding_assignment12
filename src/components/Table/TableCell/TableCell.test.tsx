import React from "react";
import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell Component", () => {
  test("renders without error", () => {
    render(<TableCell>Cell Content</TableCell>);
    const cell = screen.getByText("Cell Content");
    expect(cell).toBeInTheDocument();
  });
});
