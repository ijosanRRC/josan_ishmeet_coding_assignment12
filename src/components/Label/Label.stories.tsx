import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta = {
  component: Label,
  title: "Marbella/Label",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = (args) => <Label {...args} />;
Default.args = {
  text: "Default Label",
};
