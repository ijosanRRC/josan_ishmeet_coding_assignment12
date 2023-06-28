import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import HeroImage from './HeroImage';

const meta: Meta = {
  component: HeroImage,
  title: "Marbella/HeroImage",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = (args) => <HeroImage {...args} />;
Default.args = {
  src: 'hero.jpg',
  alt: 'Hero Image',
  caption: 'Hero Image Caption',
};
