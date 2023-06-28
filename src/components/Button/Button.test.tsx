import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from "./Button";

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<Button text="Button marbella" disabled/>)
    expect(screen.getByRole('button',{name:"Button marbella"})).toBeDisabled();
  });


  test("Check Button Click Event", () => {
    const onClickMock = jest.fn();
    render(<Button text="Button marbella" onClick={onClickMock} />);
    const buttonElement = screen.getByRole('button', { name: "Button marbella" });
    userEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });


  test("Check Button Custom Styles", () => {
    const customStyle = { backgroundColor: 'red', color: 'white' };
    render(<Button text="Button marbella" style={customStyle} />);
    const buttonElement = screen.getByRole('button', { name: "Button marbella" });
    expect(buttonElement).toHaveStyle({ backgroundColor: 'red', color: 'white' });
  });
});