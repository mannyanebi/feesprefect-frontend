import React from 'react';

interface ITableBodyProps {
    children: React.ReactNode | React.ReactNode[];
}

function TableBody({ children }: ITableBodyProps) {
    return <tbody className="divide-y divide-gray-200">{children}</tbody>;
}

export default TableBody;
