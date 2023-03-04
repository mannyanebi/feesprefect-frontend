import React from 'react';
import Table from 'components/atoms/a-table';
import TableBody from 'components/atoms/a-table-body';
import TableHead from 'components/atoms/a-table-head';
import TableRow from 'components/atoms/a-table-row';
import { useTable, usePagination, Row, Column } from 'react-table';
import TablePagination from 'components/atoms/a-table-pagination';

interface ITableWithPaginationProps {
    columns: readonly Column<object>[];
    data: any;
    pageSizeValue?: number;
}

function TableWithPagination({ columns, data, pageSizeValue = 10 }: ITableWithPaginationProps) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        // @ts-ignore
        page,
        // @ts-ignore
        canPreviousPage,
        // @ts-ignore
        canNextPage,
        // @ts-ignore
        pageOptions,
        // @ts-ignore
        pageCount,
        // @ts-ignore
        gotoPage,
        // @ts-ignore
        nextPage,
        // @ts-ignore
        previousPage,
        // @ts-ignore
        setPageSize,
        // @ts-ignore
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            // @ts-ignore
            initialState: { pageIndex: 0, pageSize: pageSizeValue },
        },
        usePagination,
    );
    return (
        <div className="overflow-x-auto flex flex-col space-y-4">
            <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th className="text-left px-4 py-2" {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>

                <TableBody {...getTableBodyProps()}>
                    {page.map((row: Row<object>) => {
                        prepareRow(row);
                        return (
                            <TableRow className="odd:bg-gray-50" {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            className="whitespace-nowrap px-4 py-2 text-gray-700"
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <TablePagination
                canNextPage={canNextPage}
                canPreviousPage={canPreviousPage}
                gotoPage={gotoPage}
                nextPage={nextPage}
                pageCount={pageCount}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
                pageSize={pageSize}
                previousPage={previousPage}
                setPageSize={setPageSize}
            />
        </div>
    );
}

export default TableWithPagination;