import FeesprefectLogo from 'components/atoms/a-feesprefect-logo';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row items-center justify-between">
            <FeesprefectLogo />
            <div className="flex flex-row space-x-4">
                <button
                    className="border px-6 py-1 rounded-lg text-sm md:text-base border-black h-[2rem] md:h-[2.5rem] hover:shadow-md"
                    type="button"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default NavBar;
