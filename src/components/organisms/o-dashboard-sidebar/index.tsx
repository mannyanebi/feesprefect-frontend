import { useLocation } from 'react-router-dom';
import React from 'react';
import SidebarNavItem from 'components/atoms/a-sidebar-item';
import NavItems from 'components/libs/NavItems';
import FeesprefectLogo from 'components/atoms/a-feesprefect-logo';

const style = {
    active: 'bg-primary rounded-full text-white',
    inactive: 'hover:bg-primary hover:rounded-full hover:text-white',
    link: `relative flex space-x-4 px-4 my-1 items-center h-[3.125rem] 
    w-full py-1 transition-all duration-300 ease-in hover:cursor-pointer`,
    icon: 'hover:fill-white leading-[3.125rem]',
    icon_active: 'fill-white',
    icon_inactive: 'fill-slate-800',
};

function Sidebar() {
    const { pathname } = useLocation();
    return (
        <div id="sidebar" className="shadow-lg shadow-teal-700/30 h-full bg-white fixed top-0 left-0 py-1.5 px-11">
            <div id="logo-content">
                <div id="logo" className="text-slate-600 flex h-[3.125rem] w-full items-center">
                    {/* <img src={Avatar.src} alt="" width="28px" height="28px" className="mr-2" /> */}
                    <div id="logo-name" className="flex flex-row space-x-4 text-xl items-center justify-center">
                        <FeesprefectLogo />
                        <span>Feesprefect</span>
                    </div>
                </div>
                {/* <MenuIcon className="absolute left-[90%] top-[1.2rem] translate-x-[-50%] items-center" /> */}
            </div>
            <ul id="nav-list" className="mt-[1.25rem]">
                {NavItems.map((item) => {
                    return (
                        <SidebarNavItem
                            pathname={pathname}
                            name={item.name}
                            path={item.path}
                            style={style}
                            Icon={item.Icon}
                        />
                    );
                })}
            </ul>
            <div id="profile-content" className="absolute bottom-0 left-0 w-full h-[4.5rem] mx-auto">
                <div className="flex w-full">
                    <button className="mx-auto bg-primary rounded-full text-white w-3/5 h-[3.125rem]" type="button">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
