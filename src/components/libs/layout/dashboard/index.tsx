import DashboardTopNavigation from 'components/molecules/m-dashboard-top-navigation';
import Sidebar from 'components/organisms/o-dashboard-sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { checkAuthToken } from 'utils/auth-cookies';

function DashboardLayout() {
    const hasAuthorization = checkAuthToken();
    if (!hasAuthorization) {
        window.location.replace(`${window.location.origin}/login`);
    }
    return (
        <>
            <Sidebar />
            <div className="dashboard-content">
                <div className="flex-flex-column p-2 space-y-2">
                    <DashboardTopNavigation />
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;

// import WithDashboard from 'components/libs/hoc/dashboard';
// import DashboardTopNavigation from 'components/molecules/m-dashboard-top-navigation';
// import Sidebar from 'components/organisms/o-dashboard-sidebar';
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { checkAuthToken } from 'utils/auth-cookies';

// interface IToggleOpenSidebarProps {
//     openSidebar: boolean
//     toggleOpenSidebar: () => void
// }

// function DashboardLayout() {
// const { width }: Size = useWindowSize();
// const [openSidebar, toggleOpenSidebar]: [boolean, () => void] = useToggle();
// const [shiftDashboardContent, toggleShiftDashboardContent] = useToggle();
// const [openDrawer, toggleOpenDrawer] = useToggle();
// const SHOW = true;
// return (
//     <>
//         <Sidebar />
//         <div className="dashboard-content">
//             <div className="flex-flex-column p-2 space-y-2">
//                 <DashboardTopNavigation />
//                 <div>
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     </>
// );
// }

// if (width > 480 && width <= 768) {
//     return (
//         <>
//             <Sidebar
//                 openDrawer={openDrawer}
//                 toggleOpenDrawer={toggleOpenDrawer}
//                 showMenuIcon={SHOW}
//                 toggleShiftDashboardContent={toggleShiftDashboardContent}
//             />
//             <div
//                 className={`dashboard-content transition-all ease-in-out duration-450 ${
//                     shiftDashboardContent ? 'translate-x-[9rem]' : ''
//                 }`}
//             >
//                 <div className="flex-flex-column p-2 space-y-2">
//                     <MainTopNavigation />
//                     <div>{children}</div>
//                 </div>
//             </div>
//         </>
//     );
// }

// if (width < 480) {
//     return (
//         <>
//             <SidebarSlideOver openSidebar={openSidebar} toggleOpenSidebar={toggleOpenSidebar}>
//                 <Sidebar openDrawer={SHOW} showMenuIcon={!SHOW} />
//             </SidebarSlideOver>
//             <MobileTopNavigation toggleOpenSidebar={toggleOpenSidebar} />
//             <div className="p-4">{children}</div>
//         </>
//     );
// }
// }
// }

// export default DashboardLayout;
