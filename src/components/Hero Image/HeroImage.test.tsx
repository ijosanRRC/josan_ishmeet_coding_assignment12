import React from "react";
import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

describe("HeroImage Component", () => {
  test("renders without error", () => {
    render(<HeroImage src="path/to/image.jpg" alt="Hero Image" />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
  });
});
