import SchoolFeesPaymentsListTable from 'components/organisms/o-school-fees-payments-list-table';
import React from 'react';

function PaymentsPage() {
    return (
        <div className="flex flex-col space-y-6">
            <SchoolFeesPaymentsListTable tablePageSizeValue={20} />
        </div>
    );
}

export default PaymentsPage;
