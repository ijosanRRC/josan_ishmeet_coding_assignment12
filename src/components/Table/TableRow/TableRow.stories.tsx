import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import TableRow from './TableRow';

const meta: Meta = {
  component: TableRow,
  title: "Marbella/TableRow",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = (args) => <TableRow{...args} />;
Default.args = {
  children: <td>Table Cell</td>,
};