/* eslint-disable @typescript-eslint/no-unused-vars */
import api from 'api';
import NumberOfClassesStat from 'components/atoms/a-number-of-classes-stat-card';
import NumberOfStudentsStat from 'components/atoms/a-number-of-students-stat-card';
import Toast from 'components/atoms/a-toast';
import TotalAmountOfSchoolFeesStat from 'components/atoms/a-total-amount-of-school-fees-stat';
import React, { useCallback, useEffect, useState } from 'react';

interface StatisticsData {
    studentsCount: number;
    academicClassesCount: number;
    schoolFeesPaymentsCount: number;
}

function DashboardHomeStats() {
    const [statisticsData, setStatisticsData] = useState<StatisticsData>();
    const fetchAndSetSchoolStatisticsData = useCallback(async () => {
        try {
            const response = await api.get('school-statistics/');
            if (response.status === 200) {
                setStatisticsData(response.data.data);
            }
        } catch (error) {
            let errorMessage;
            // @ts-ignore
            if (error.response) {
                // @ts-ignore
                errorMessage = error.response.data.message;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    }, []);

    useEffect(() => {
        fetchAndSetSchoolStatisticsData();
    }, [fetchAndSetSchoolStatisticsData]);

    return (
        <div className="flex flex-row justify-around space-x-6">
            <NumberOfStudentsStat numberOfStudents={statisticsData?.studentsCount || 0} />
            <NumberOfClassesStat numberOfClasses={statisticsData?.academicClassesCount || 0} />
            <TotalAmountOfSchoolFeesStat totalAmountOfSchoolFees={statisticsData?.schoolFeesPaymentsCount || 0} />
            {/* <NumberOfStudentsStat /> */}
        </div>
    );
}

export default DashboardHomeStats;
