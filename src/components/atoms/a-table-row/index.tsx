import React from 'react';

interface ITableRowProps {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
}

function TableRow({ className, children }: ITableRowProps) {
    return <tr className={className}>{children}</tr>;
}

export default TableRow;
