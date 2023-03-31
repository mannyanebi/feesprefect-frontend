import SchoolFeesPaymentsListTable from 'components/organisms/o-school-fees-payments-list-table';
import React from 'react';
import { Link } from 'react-router-dom';

function PaymentsPage() {
    return (
        <div className="flex flex-col space-y-6">
            <div>
                <Link
                    className="rounded-md border border-secondary bg-secondary px-9 py-3 font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-primary"
                    to="add"
                >
                    Record a student&apos;s payment
                </Link>
            </div>
            <SchoolFeesPaymentsListTable tablePageSizeValue={20} />
        </div>
    );
}

export default PaymentsPage;
