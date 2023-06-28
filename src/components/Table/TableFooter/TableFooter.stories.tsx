import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter';

interface TableFooterProps {
  children: React.ReactNode;
}

const meta: Meta<TableFooterProps> = {
  component: TableFooter,
  title: 'Marbella/TableFooter',
  argTypes: {},
};
export default meta;

type Story = StoryObj<TableFooterProps>;

export const Default: Story = (args) => <TableFooter {...args} />;
Default.args = {
  children: 'Table Footer',
};
