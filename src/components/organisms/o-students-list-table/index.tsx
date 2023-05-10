/* eslint-disable @typescript-eslint/no-unused-vars */
import api from 'api';
import ClassListDropdown from 'components/atoms/a-class-list-select';
import SectionLoader from 'components/atoms/a-section-spinner';
import Toast from 'components/atoms/a-toast';
import TableWithPagination from 'components/molecules/m-student-list-react-table-with-pagination';
import headerColumns from 'libs/react-table-columns/StudentListTableColumns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface IStudentsListTableProps {
    tablePageSizeValue?: number;
    filterClassId?: number;
}

function StudentsListTable({ tablePageSizeValue, filterClassId }: IStudentsListTableProps) {
    const [studentsListData, setStudentsListData] = useState<Array<any>>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filterBy, setFilterBy] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const fetchAndSetStudentsData = useCallback(async () => {
        try {
            setLoading(true);
            const queryString: string = `students/?all&academic_class_id=${filterClassId ?? filterBy}`;
            const response = await api.get(queryString);
            if (response.status === 200) {
                setStudentsListData(response.data);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
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

    if (loading) {
        return <SectionLoader />;
    }

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between">
                <h2 className="m-4 font-bold text-2xl">List of Students</h2>
                <div className="flex flex-row space-x-2 items-center justify-center">
                    <div className="flex space-x-2 items-center justify-center">
                        <h4 className="mx-2 font-bold text-lg">Filter by classes:</h4>
                        <ClassListDropdown filterBy={filterBy} setFilterBy={setFilterBy} />
                    </div>
                </div>
            </div>
            {studentsListData.length > 0 ? (
                <TableWithPagination columns={columns} data={studentsListData} pageSizeValue={tablePageSizeValue} />
            ) : (
                <div className="flex items-center justify-center min-h-[30vh]">
                    <h2 className="m-4 text-center text-xl">No students found</h2>
                </div>
            )}
        </div>
    );
}

export default StudentsListTable;
