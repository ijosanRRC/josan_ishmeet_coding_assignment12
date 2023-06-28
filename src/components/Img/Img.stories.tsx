import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import Img from './Img';


const meta: Meta = {
  component: Img,
  title: "Marbella/Img",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = (args) => <Img{...args} />;
Default.args = {
  src: 'Img.jpg',
  alt: ' Image',
};
