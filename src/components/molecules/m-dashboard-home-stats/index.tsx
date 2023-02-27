import NumberOfClassesStat from 'components/atoms/a-number-of-classes-stat-card';
import NumberOfStudentsStat from 'components/atoms/a-number-of-students-stat-card';
import TotalAmountOfSchoolFeesStat from 'components/atoms/a-total-amount-of-school-fees-stat';
import React from 'react';

function DashboardHomeStats() {
    return (
        <div className="flex flex-row justify-around space-x-6">
            <NumberOfStudentsStat />
            <NumberOfClassesStat />
            <TotalAmountOfSchoolFeesStat />
            <NumberOfStudentsStat />
        </div>
    );
}

export default DashboardHomeStats;
