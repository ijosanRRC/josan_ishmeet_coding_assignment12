import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import Table from './Table';

const meta: Meta = {
  component: Table,
  title: "Marbella/Table",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = (args) => <Table{...args} />;
Default.args = {
  children: (
    <tbody>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
      <tr>
        <td>Cell 3</td>
        <td>Cell 4</td>
      </tr>
    </tbody>
  ),
};