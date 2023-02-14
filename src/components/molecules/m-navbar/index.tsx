import FeesprefectLogo from 'components/atoms/a-feesprefect-logo';
import React from 'react';

function NavBar() {
    return (
        <div className="flex flex-row justify-between">
            <FeesprefectLogo />
            <div className="flex flex-row space-x-4">
                <button
                    className="border px-6 py-1 rounded-lg text-sm md:text-base border-black h-[2rem] md:h-[2.5rem] hover:shadow-md"
                    type="button"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default NavBar;
