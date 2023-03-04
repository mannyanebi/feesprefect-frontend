/* eslint-disable @typescript-eslint/no-unused-vars */
import api from 'api';
import ClassListDropdown from 'components/atoms/a-class-list-select';
import DebouncedSearchInput from 'components/atoms/a-debounced-search-input-field';
import Toast from 'components/atoms/a-toast';
import TableWithPagination from 'components/molecules/m-react-table-with-pagination';
import headerColumns from 'libs/react-table-columns/StudentListTableColumns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface IStudentsListTableProps {
    tablePageSizeValue?: number;
}

function StudentsListTable({ tablePageSizeValue }: IStudentsListTableProps) {
    const [studentsListData, setStudentsListData] = useState<Array<any>>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filterBy, setFilterBy] = useState<string>('');

    const fetchAndSetStudentsData = useCallback(async () => {
        try {
            const queryString: string = `students/?all&academic_class_id=${filterBy}&name__contains=${searchQuery}`;
            const response = await api.get(queryString);
            if (response.status === 200) {
                setStudentsListData(response.data);
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
    }, [filterBy, searchQuery]);

    useEffect(() => {
        fetchAndSetStudentsData();
    }, [fetchAndSetStudentsData]);

    const columns = useMemo(() => [...headerColumns], []);

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between">
                <h2 className="m-4 font-bold text-2xl">List of Students</h2>
                <div className="flex flex-row space-x-2 items-center justify-center">
                    <div className="flex space-x-2 items-center justify-center">
                        <h4 className="mx-2 font-bold text-lg">Search students by name:</h4>
                        <DebouncedSearchInput setSearchQuery={setSearchQuery} />
                    </div>
                    <div className="flex space-x-2 items-center justify-center">
                        <h4 className="mx-2 font-bold text-lg">Filter by classes:</h4>
                        <ClassListDropdown filterBy={filterBy} setFilterBy={setFilterBy} />
                    </div>
                </div>
            </div>
            <TableWithPagination columns={columns} data={studentsListData} pageSizeValue={tablePageSizeValue} />
        </div>
    );
}

export default StudentsListTable;
