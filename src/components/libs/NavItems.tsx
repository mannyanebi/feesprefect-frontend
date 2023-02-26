import { v4 as uuidv4 } from 'uuid';
import { BsCreditCardFill } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';
import { SiGoogleclassroom } from 'react-icons/si';
import DashboardIcon from 'components/libs/icons/Dashboard';
import { IconType } from 'react-icons/lib';

interface Item {
    id: string;
    name: string;
    path: string;
    Icon: typeof DashboardIcon | IconType;
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
        name: 'Classes',
        path: '/dashboard/classes',
        Icon: SiGoogleclassroom,
    },
    {
        id: uuidv4(),
        name: 'Students',
        path: '/dashboard/students',
        Icon: HiAcademicCap,
    },
    {
        id: uuidv4(),
        name: 'Payments',
        path: '/dashboard/payments',
        Icon: BsCreditCardFill,
    },
];

export default NavItems;
