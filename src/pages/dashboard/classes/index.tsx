import Table from 'components/atoms/a-table';
import { v4 as uuidv4 } from 'uuid';
import TableBody from 'components/atoms/a-table-body';
import TableHead from 'components/atoms/a-table-head';
import TableRow from 'components/atoms/a-table-row';
import Toast from 'components/atoms/a-toast';
import React, { useCallback, useEffect, useState } from 'react';
import api from 'api';
import ButtonWithIcon from 'components/atoms/a-button-with-icon';
import { BsArrowLeftCircleFill, BsViewList } from 'react-icons/bs';
import StudentsListTable from 'components/organisms/o-students-list-table';
import { Link } from 'react-router-dom';

function AcademicClassesPage() {
    const [classesListData, setClassesListData] = useState([]);
    const [showStudents, setShowStudents] = useState(false);
    const [filterClassId, setFilterClassId] = useState<number>(0);

    const fetchAndSetClassesData = useCallback(async () => {
        try {
            const response = await api.get('academic-class/');
            if (response.status === 200) {
                setClassesListData(response.data);
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
        fetchAndSetClassesData();
    }, [fetchAndSetClassesData]);

    const handleOnClick = useCallback((classId: number) => {
        setFilterClassId(classId);
        setShowStudents(true);
    }, []);

    const setShowStudentsToFalse = useCallback(() => {
        setShowStudents(false);
    }, []);

    if (showStudents) {
        return (
            <div className="flex flex-col space-y-4">
                <button
                    type="button"
                    className="inline-flex items-center items-justify w-[17rem] rounded-full border-2 border-primary px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    onClick={setShowStudentsToFalse}
                    data-te-ripple-init
                >
                    <span className="mx-5">
                        <BsArrowLeftCircleFill size={18} />
                    </span>
                    <span>Back to Classes List</span>
                </button>
                <StudentsListTable tablePageSizeValue={20} filterClassId={filterClassId} />
            </div>
        );
    }

    return (
        <div className="flex flex-col space-y-6">
            <div>
                <Link
                    className="rounded-md border border-secondary bg-secondary px-9 py-3 font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-primary"
                    to="add"
                >
                    Add new class
                </Link>
            </div>
            <div className="overflow-x-auto">
                <h2 className="m-4 font-bold text-2xl">List of Classes</h2>
                <Table>
                    <TableHead>
                        <TableRow>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Action</th>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {/* @ts-ignore */}
                        {classesListData &&
                            classesListData.map((item) => {
                                return (
                                    <TableRow key={uuidv4()} className="odd:bg-gray-50">
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                            {/* @ts-ignore */}
                                            {item.name}
                                        </td>
                                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                            {/* @ts-ignore */}
                                            <ButtonWithIcon icon={BsViewList} onClick={() => handleOnClick(item.id)}>
                                                View Class
                                            </ButtonWithIcon>
                                        </td>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default AcademicClassesPage;
