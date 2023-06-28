import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import TableHeader from './TableHeader';

const meta: Meta = {
  component: TableHeader,
  title: "Marbella/TableHeader",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = (args) => <TableHeader{...args} />;
Default.args = {
  children: <tr><th>Header 1</th><th>Header 2</th></tr>,
};