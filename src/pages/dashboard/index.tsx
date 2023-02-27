import DashboardHomeStats from 'components/molecules/m-dashboard-home-stats';
import StudentsListTable from 'components/organisms/o-students-list-table';
import React from 'react';

function Dashboard() {
    return (
        <div className="flex flex-col space-y-8 px-8 py-6">
            <DashboardHomeStats />
            <StudentsListTable />
        </div>
    );
}

export default Dashboard;
