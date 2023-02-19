/* eslint-disable import/no-unresolved */

import DashboardIcon from 'components/libs/icons/Dashboard';

// interface defaultProps{
//     className: string
// }

export interface SidebarNavItemProps {
    id?: string;
    name: string;
    path: string;
    pathname?: string;
    style?: {
        link: string;
        active: string;
        inactive: string;
        icon_active: string;
        icon_inactive: string;
    };
    Icon: typeof DashboardIcon;
}
