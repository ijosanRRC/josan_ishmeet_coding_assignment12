import React from "react";
import { render, screen } from "@testing-library/react";
import Img from "./Img";

describe("Image Component", () => {
  test("renders without error", () => {
    render(<Img src="C:\Users\A\Desktop\Coding_Assgnment12\src\components\Img\Img.jpg" alt="Image" />);
    const image = screen.getByAltText("Image");
    expect(image).toBeInTheDocument();
  });
});
