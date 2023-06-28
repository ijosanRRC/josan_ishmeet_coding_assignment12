import React from 'react';

interface TableFooterProps {
  children: React.ReactNode;
}

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};

export default TableFooter;
