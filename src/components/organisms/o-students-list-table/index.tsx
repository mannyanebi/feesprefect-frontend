/* eslint-disable @typescript-eslint/no-unused-vars */
import api from 'api';
import ClassListDropdown from 'components/atoms/a-class-list-select';
import Toast from 'components/atoms/a-toast';
import TableWithPagination from 'components/molecules/m-react-table-with-pagination';
import headerColumns from 'libs/react-table-columns/StudentListTableColumns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

function StudentsListTable() {
    const [studentsListData, setStudentsListData] = useState<Array<any>>([]);
    const [filterBy, setFilterBy] = useState<string>('');

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

    const columns = useMemo(() => [...headerColumns], []);

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between">
                <h2 className="m-4 font-bold text-2xl">List of Students</h2>
                <div className="flex flex-row space-x-2 items-center justify-center">
                    <h4 className="mx-2 font-bold text-lg">Filter by classes:</h4>
                    <ClassListDropdown filterBy={filterBy} setFilterBy={setFilterBy} />
                </div>
            </div>
            <TableWithPagination columns={columns} data={studentsListData} />
        </div>
    );
}

export default StudentsListTable;
