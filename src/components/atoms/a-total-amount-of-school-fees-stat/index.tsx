import React from 'react';
import MoneyStatSvg from 'images/svg/money-stats.svg';

function TotalAmountOfSchoolFeesStat() {
    return (
        <div className="h-[12rem] w-[12rem] bg-white shadow-md p-4 flex flex-col items-center justify-center rounded-md space-y-4">
            <img src={MoneyStatSvg} className="w-[3rem]" alt="student statistics" />
            <span className="font-bold text-[1.5rem]">N 0.00</span>
            <span className="text-gray-600 text-center text-sm">Total amount of school fees Payments</span>
        </div>
    );
}

export default TotalAmountOfSchoolFeesStat;
