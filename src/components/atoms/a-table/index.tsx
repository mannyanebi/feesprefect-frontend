import React from 'react';

interface ITableProps {
    children: React.ReactNode | React.ReactNode[];
}

function Table({ children }: ITableProps) {
    return <table className="min-w-full divide-y-2 divide-gray-200 text-sm">{children}</table>;
}

export default Table;
