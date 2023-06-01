/* eslint-disable @typescript-eslint/no-unused-vars */
import api from 'api';
import ClassListDropdown from 'components/atoms/a-class-list-select';
import SectionLoader from 'components/atoms/a-section-spinner';
import Toast from 'components/atoms/a-toast';
import SchoolFeesPaymentTableWithPagination from 'components/molecules/m-school-fees-payment-list-react-table-with-pagination';
import headerColumns from 'libs/react-table-columns/SchoolFeesPaymentsListTableColumns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface ISchoolFeesPaymentsListTableProps {
    tablePageSizeValue?: number;
    filterClassId?: number;
}

function SchoolFeesPaymentsListTable({ tablePageSizeValue, filterClassId }: ISchoolFeesPaymentsListTableProps) {
    const [schoolFeesPaymentsListData, setSchoolFeesPaymentsListData] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [filterBy, setFilterBy] = useState<string>('');
    const fetchAndSetSchoolFeesPaymentsData = useCallback(async () => {
        try {
            setLoading(true);
            const queryString: string = `school-fees-payment/?all&school_fee__academic_class_id=${
                filterClassId ?? filterBy
            }`;
            const response = await api.get(queryString);
            if (response.status === 200) {
                setSchoolFeesPaymentsListData(response.data);
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
    }, [filterBy]);

    useEffect(() => {
        fetchAndSetSchoolFeesPaymentsData();
    }, [fetchAndSetSchoolFeesPaymentsData]);

    const columns = useMemo(() => [...headerColumns], []);

    if (loading) {
        return <SectionLoader />;
    }

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between">
                <h2 className="m-4 font-bold text-2xl">List of School Fees Payments</h2>
                <div className="flex flex-row space-x-2 items-center justify-center">
                    {/* <div className="flex space-x-2 items-center justify-center">
                        <h4 className="mx-2 font-bold text-lg">Search students by name:</h4>
                        <DebouncedSearchInput setSearchQuery={setSearchQuery} />
                    </div> */}
                    <div className="flex space-x-2 items-center justify-center">
                        <h4 className="mx-2 font-bold text-lg">Filter by classes:</h4>
                        <ClassListDropdown filterBy={filterBy} setFilterBy={setFilterBy} />
                    </div>
                </div>
            </div>
            <SchoolFeesPaymentTableWithPagination
                columns={columns}
                data={schoolFeesPaymentsListData}
                pageSizeValue={tablePageSizeValue}
            />
        </div>
    );
}

export default SchoolFeesPaymentsListTable;
