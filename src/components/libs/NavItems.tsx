import { v4 as uuidv4 } from 'uuid';
import DashboardIcon from 'components/libs/icons/Dashboard';

interface Item {
    id: string;
    name: string;
    path: string;
    Icon: typeof DashboardIcon;
}

const NavItems: Item[] = [
    {
        id: uuidv4(),
        name: 'Dashboard',
        path: '/dashboard',
        Icon: DashboardIcon,
    },
    {
        id: uuidv4(),
        name: 'Events',
        path: '/events',
        Icon: DashboardIcon,
    },
    {
        id: uuidv4(),
        name: 'Membership',
        path: '/membership',
        Icon: DashboardIcon,
    },
    {
        id: uuidv4(),
        name: 'Trainings',
        path: '/trainings',
        Icon: DashboardIcon,
    },
];

export default NavItems;
