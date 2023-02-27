import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarNavItemProps } from 'types/SidebarItem.types';

function SidebarNavItem({ path, pathname, style, Icon, name }: SidebarNavItemProps) {
    return (
        <li className={`${style!.link} ${path === pathname ? style!.active : style!.inactive}`}>
            <Icon className={`${path === pathname ? style!.icon_active : style!.icon_inactive}`} />
            <Link to={path}>
                {
                    // eslint-disable-next-line
                    <a>{name}</a>
                }
            </Link>
        </li>
    );
}

export default SidebarNavItem;
