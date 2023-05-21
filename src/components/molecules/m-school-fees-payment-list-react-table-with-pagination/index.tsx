import React, { useCallback } from 'react';
import Table from 'components/atoms/a-table';
import TableBody from 'components/atoms/a-table-body';
import TableHead from 'components/atoms/a-table-head';
import TableRow from 'components/atoms/a-table-row';
import { AiFillEdit } from 'react-icons/ai';
import { useTable, usePagination, Row, Column } from 'react-table';
import TablePagination from 'components/atoms/a-table-pagination';
import GreenCheckMark from 'components/atoms/a-green-check-mark';
import RedCrossMark from 'components/atoms/a-red-cross-mark';
import ButtonWithIcon from 'components/atoms/a-button-with-icon';
import { useNavigate } from 'react-router-dom';
// import ButtonWithIcon from 'components/atoms/a-button-with-icon';
// import { useNavigate } from 'react-router-dom';

interface ITableWithPaginationProps {
    columns: readonly Column<object>[];
    data: any;
    pageSizeValue?: number;
}

function SchoolFeesPaymentTableWithPagination({ columns, data, pageSizeValue = 10 }: ITableWithPaginationProps) {
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

    const navigate = useNavigate();

    const handleEditPayment = useCallback((uuid: string, schoolFeeId: string) => {
        navigate(`update/${uuid}/${schoolFeeId}`);
    }, []);

    return (
        <div className="overflow-x-auto flex flex-col space-y-4">
            {data?.length > 0 ? (
                <>
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
                                            if (cell.column.id === 'isPaymentComplete') {
                                                return (
                                                    <td
                                                        className="whitespace-nowrap px-4 py-2 text-gray-700"
                                                        {...cell.getCellProps()}
                                                    >
                                                        {/* @ts-ignore */}
                                                        {cell.value ? <GreenCheckMark /> : <RedCrossMark />}
                                                    </td>
                                                );
                                            }
                                            return (
                                                <td
                                                    className="whitespace-nowrap px-4 py-2 text-gray-700"
                                                    {...cell.getCellProps()}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            );
                                        })}
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            <ButtonWithIcon
                                                icon={AiFillEdit}
                                                onClick={() =>
                                                    handleEditPayment(
                                                        // @ts-ignore
                                                        row.cells[0].row.original.uuid,
                                                        // @ts-ignore
                                                        row.cells[0].row.original.schoolFee.id,
                                                    )
                                                }
                                            >
                                                Edit Payment
                                            </ButtonWithIcon>
                                        </td>
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
                </>
            ) : (
                <div className="flex items-center justify-center min-h-[30vh]">
                    <h2 className="m-4 text-center text-xl">Nothing to show, no payments have been recorded</h2>
                </div>
            )}
        </div>
    );
}

export default SchoolFeesPaymentTableWithPagination;
