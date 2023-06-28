import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell';
import { TableCellProps } from './TableCell.types';

const meta: Meta<TableCellProps> = {
  component: TableCell,
  title: 'Marbella/TableCell',
  argTypes: {},
};
export default meta;

type Story = StoryObj<TableCellProps>;

export const Default: Story = (args) => <TableCell {...args} />;
Default.args = {
  children: 'Table Cell',
};
