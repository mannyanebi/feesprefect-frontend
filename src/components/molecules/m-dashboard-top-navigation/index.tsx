import React from 'react';
import { RiAdminFill } from 'react-icons/ri';
// import Avatar from '@assets/jpg/44.jpg';
// import SearchBarLarge from '@molecules/dashboard/top-navigation/m-search-bar-lg';
// import ProfileDropDown from '@molecules/dashboard/top-navigation/profile-dropdown';
// import { MdArrowDropDown } from 'react-icons/md';

function DashboardTopNavigation() {
    return (
        <div className="flex flex-col space-y-3">
            <div id="dashboard-main-top-navigation">
                <div className="float-right m-4">
                    <div className="flex flex-row space-x-4 items-center">
                        <RiAdminFill size={25} />
                        <h4 className="font-bold">Admin</h4>
                    </div>
                </div>
                {/* <div className="w-[80%]">
                    <SearchBarLarge placeholder="Search Dashboard" />
                </div> */}
                {/* <div className="w-[20%] flex flex-row space-x-3 items-center justify-around">
                    <p className="font-bold text-base text-center">Prodigy Ayo</p>
                    <div className="inline-flex ml-4">
                        <img src={Avatar.src} alt="" width="35px" height="35px" className="rounded-xl object-cover" />
                        <ProfileDropDown icon={<MdArrowDropDown size={35} />} />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default DashboardTopNavigation;
