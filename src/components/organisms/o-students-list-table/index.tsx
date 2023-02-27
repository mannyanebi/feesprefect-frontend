import Table from 'components/atoms/a-table';
import TableBody from 'components/atoms/a-table-body';
import TableHead from 'components/atoms/a-table-head';
import TableRow from 'components/atoms/a-table-row';
import React from 'react';

function StudentsListTable() {
    return (
        <div className="overflow-x-auto">
            <h2 className="m-4 font-bold text-2xl">List of Students</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
                        <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Class</th>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow className="odd:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Primary 1</td>
                    </TableRow>

                    <TableRow className="odd:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Primary 2</td>
                    </TableRow>
                    <TableRow className="odd:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Primary 1</td>
                    </TableRow>

                    <TableRow className="odd:bg-gray-50">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Jane Doe</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Primary 2</td>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default StudentsListTable;
