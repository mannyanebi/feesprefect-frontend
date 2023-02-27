import Sidebar from 'components/organisms/o-dashboard-sidebar';
import React from 'react';

function WithDashboard(WrappedComponent: any) {
    return function WithDashboardComponent({ ...props }) {
        return (
            <>
                <Sidebar />
                <div className="absolute h-full w-[calc(100%-16.5rem)] left-[16.5rem]">
                    <WrappedComponent {...props} />
                </div>
            </>
        );
    };
}

export default WithDashboard;
