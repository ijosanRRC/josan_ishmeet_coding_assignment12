import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta = {
  component: Card,
  title: "Marbella/Card",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = (args) => <Card {...args} />;
Default.args = {
  title:"Card Title",
  content:"Card Content"
};
