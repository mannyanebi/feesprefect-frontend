/* eslint-disable @typescript-eslint/no-unused-vars */
import api from 'api';
import Toast from 'components/atoms/a-toast';
import TermPaymentDetails from 'components/molecules/m-term-payment-details';
import React, { useCallback, useEffect, useState } from 'react';

interface IStudentPaymentHistoryProps {
    studentUUID: string;
    academicClassId: number;
    refreshStudentPaymentHistory: boolean;
}

function StudentPaymentHistory({
    studentUUID,
    academicClassId,
    refreshStudentPaymentHistory,
}: IStudentPaymentHistoryProps) {
    const [studentPaymentHistoryData, setStudentPaymentHistoryData] = useState<any[]>([]);
    const fetchAndSetStudentPaymentHistoryData = useCallback(async () => {
        if (!studentUUID || !academicClassId) {
            // If either studentUUID or academicClassId is not present, return early without executing the function
            return;
        }
        try {
            const response = await api.get(`student-school-fees-payments/${studentUUID}/`);
            if (response.status === 200) {
                setStudentPaymentHistoryData(response.data.data);
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
    }, [studentUUID, academicClassId]);

    useEffect(() => {
        fetchAndSetStudentPaymentHistoryData();
    }, [fetchAndSetStudentPaymentHistoryData, refreshStudentPaymentHistory]);
    return (
        <div className="w-1/2 xl:w-2/5 flex flex-col space-y-5 border-l justify-center px-6 overflow-y-auto">
            <div className="w-full flex flex-row space-x-4 items-center justify-between">
                <h5 className="text-md xl:text-lg font-medium text-neutral-800">Payments</h5>
                <h5 className="text-sm text-gray-500">Transaction History</h5>
            </div>
            {studentPaymentHistoryData.length > 0 ? (
                studentPaymentHistoryData.map((paymentHistory) => (
                    <TermPaymentDetails paymentHistory={paymentHistory} />
                ))
            ) : (
                <span>No payment history</span>
            )}
            <p className="text-xs text-neutral-500 dark:text-neutral-300">Last updated recently</p>
        </div>
    );
}

export default StudentPaymentHistory;
