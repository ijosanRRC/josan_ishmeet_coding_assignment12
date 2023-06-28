import React from "react";
import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

describe("TableHeader Component", () => {
  test("renders without error", () => {
    render(<TableHeader>Header Content</TableHeader>);
    const header = screen.getByText("Header Content");
    expect(header).toBeInTheDocument();
  });
});
