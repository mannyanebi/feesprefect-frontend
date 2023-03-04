import React from 'react';
import TableNavigationButton from '../a-table-navigation-button';

interface ITablePaginationProps {
    canPreviousPage: any;
    canNextPage: any;
    pageOptions: any;
    pageCount: any;
    gotoPage: any;
    nextPage: any;
    previousPage: any;
    setPageSize: any;
    pageIndex: any;
    pageSize: any;
}

function TablePagination({
    canNextPage,
    canPreviousPage,
    gotoPage,
    nextPage,
    pageCount,
    pageOptions,
    previousPage,
    setPageSize,
    pageIndex,
    pageSize,
}: ITablePaginationProps) {
    return (
        <div className="flex flex-row space-x-5 items-center">
            <TableNavigationButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </TableNavigationButton>{' '}
            <TableNavigationButton onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </TableNavigationButton>{' '}
            <TableNavigationButton onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </TableNavigationButton>{' '}
            <TableNavigationButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </TableNavigationButton>{' '}
            <span className="p-3 border-r-2 border-black">
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span className="inline-flex items-center space-x-2">
                <span>Go to page:</span>
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                        gotoPage(page);
                    }}
                    style={{ width: '100px' }}
                />
            </span>{' '}
            <select
                value={pageSize}
                onChange={(e) => {
                    setPageSize(Number(e.target.value));
                }}
            >
                {[10, 20, 30, 40, 50].map((pageCountSize) => (
                    <option key={pageCountSize} value={pageCountSize}>
                        Show {pageCountSize}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default TablePagination;
