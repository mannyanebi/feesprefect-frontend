import StudentsListTable from 'components/organisms/o-students-list-table';
import React from 'react';
import { Link } from 'react-router-dom';

function StudentsPage() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-5">
                <Link
                    className="rounded-md border border-secondary bg-secondary px-9 py-3 font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-primary"
                    to="add"
                >
                    Add new student
                </Link>
                <Link
                    className="rounded-md border border-secondary bg-secondary px-9 py-3 font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-primary"
                    to="search"
                >
                    Search for student
                </Link>
            </div>
            <StudentsListTable tablePageSizeValue={20} />
        </div>
    );
}

export default StudentsPage;
