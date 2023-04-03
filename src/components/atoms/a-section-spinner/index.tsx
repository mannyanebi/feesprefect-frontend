import React from 'react';

function SectionLoader() {
    return (
        <div className="flex justify-center items-center w-full min-h-[70vh] my-6">
            <div className="flex">
                <div className="relative">
                    <div
                        className="w-12 h-12 rounded-full absolute
            border-2 border-solid border-gray-200"
                    />

                    <div
                        className="w-12 h-12 rounded-full animate-spin absolute
            border-2 border-solid border-blue-500 border-t-transparent"
                    />
                </div>
            </div>
        </div>
    );
}

export default SectionLoader;
