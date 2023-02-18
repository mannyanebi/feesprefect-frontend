import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

function SpinnerIcon() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <span className="animate-spin">
                <ImSpinner2 className="text-xl text-white hover:text-primary" />
            </span>
        </div>
    );
}

export default SpinnerIcon;
