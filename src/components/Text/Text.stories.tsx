import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import Text from './Text';

const meta: Meta = {
  component: Text,
  title: "Marbella/Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = (args) => <Text{...args} />;
Default.args = {
  text: ' Text',
};