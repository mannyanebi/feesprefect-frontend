import api from 'api';
import Table from 'components/atoms/a-table';
import TableBody from 'components/atoms/a-table-body';
import TableHead from 'components/atoms/a-table-head';
import TableRow from 'components/atoms/a-table-row';
import Toast from 'components/atoms/a-toast';
import React, { useCallback, useEffect, useState } from 'react';

function StudentsListTable() {
    const [studentsListData, setStudentsListData] = useState([]);

    const fetchAndSetStudentsData = useCallback(async () => {
        try {
            const response = await api.get('students/?page=2&page_size=50');
            if (response.status === 200) {
                setStudentsListData(response.data.results);
            }
        } catch (error) {
            let errorMessage;
            // @ts-ignore
            if (error.response) {
                // @ts-ignore
                errorMessage = error.response.data.message;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    }, []);

    useEffect(() => {
        fetchAndSetStudentsData();
    }, [fetchAndSetStudentsData]);

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
                    {/* @ts-ignore */}
                    {studentsListData &&
                        studentsListData.map((item) => {
                            return (
                                <TableRow className="odd:bg-gray-50">
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {/* @ts-ignore */}
                                        {item.name}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">Primary 1</td>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </div>
    );
}

export default StudentsListTable;
