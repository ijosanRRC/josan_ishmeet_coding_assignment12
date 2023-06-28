import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  test("renders the card component", () => {
    render(<Card title="Card Title" content="Card Content" />);
    const cardElement = screen.getByRole("article");
    expect(cardElement).toBeInTheDocument();
  });

  test("displays the correct title and content", () => {
    render(<Card title="Card Title" content="Card Content" />);
    const titleElement = screen.getByText("Card Title");
    const contentElement = screen.getByText("Card Content");
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
