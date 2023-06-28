import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import RadioButton, { RadioButtonProps } from './RadioButton';

const meta: Meta<RadioButtonProps> = {
  component: RadioButton,
  title: "Marbella/RadioButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<RadioButtonProps>;

export const Default: Story = (args) => <RadioButton {...args} />;
Default.args = {
  label: 'Radio Button',
  value: "default",
  checked: false,
  onChange: () => {},
};
