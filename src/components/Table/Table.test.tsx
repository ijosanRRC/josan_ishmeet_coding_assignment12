import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
  test("renders the table component", () => {
    render(<Table children=" table " />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });
});
