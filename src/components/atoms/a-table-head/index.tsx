import React from 'react';

interface ITableHeadProps {
    children: React.ReactNode | React.ReactNode[];
}

function TableHead({ children }: ITableHeadProps) {
    return <thead>{children}</thead>;
}

export default TableHead;
