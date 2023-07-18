/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type PaymentType = {
    amountPaid: string;
    isRegistrationFeePayment: number;
};

type AcademicClassPaymentDetails = {
    schoolFeeName: string;
    schoolFeeAmount: string;
    payments: Array<PaymentType>;
    isPaymentComplete: boolean;
};

type PaymentDetails = {
    academicClassName: string;
    payments: Array<AcademicClassPaymentDetails>;
};

interface ITermPaymentDetailsProps {
    paymentHistory: PaymentDetails;
}

function TermPaymentDetails({ paymentHistory }: ITermPaymentDetailsProps) {
    if (paymentHistory) {
        const { academicClassName, payments } = paymentHistory;
        return (
            <div className="flex flex-col space-y-3">
                <div className="w-full bg-gray-100 p-3">
                    <h2 className="text-primary font-medium text-md xl:text-xl">{academicClassName}</h2>
                </div>
                {payments &&
                    payments.map((paymentDetail) => {
                        return (
                            <div className="px-3 xl:px-6 space-y-2">
                                <div className="flex flex-row justify-between">
                                    <h5 className="font-medium text-primary text-md">{paymentDetail?.schoolFeeName}</h5>
                                    <span className="inline-flex flex-row space-x-4 items-center">
                                        <h5 className="text-md">₦ {paymentDetail?.schoolFeeAmount}</h5>
                                        <input type="checkbox" name="paid" checked={paymentDetail?.isPaymentComplete} />
                                    </span>
                                </div>
                                <div className="flex bg-gray-100 rounded-lg flex-col text-sm space-y-4 py-4 px-6">
                                    {paymentDetail?.payments &&
                                        paymentDetail?.payments.map((payment, index) => (
                                            <span className="inline-flex justify-between">
                                                <span className="font-medium">
                                                    Payment {String(index + 1)}{' '}
                                                    {payment.isRegistrationFeePayment && '- Registration Fee'}
                                                </span>
                                                <span>₦ {payment.amountPaid}</span>
                                            </span>
                                        ))}
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
    return null;
}

export default TermPaymentDetails;
