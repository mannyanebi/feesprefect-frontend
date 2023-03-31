import React from 'react';

type PaymentDetails = {
    schoolFeeName: string;
    schoolFeeAmount: string;
    payments: Array<string>;
    isPaymentComplete: boolean;
};

interface ITermPaymentDetailsProps {
    paymentHistory: PaymentDetails;
}

function TermPaymentDetails({ paymentHistory }: ITermPaymentDetailsProps) {
    if (paymentHistory) {
        const { schoolFeeName, schoolFeeAmount, payments, isPaymentComplete } = paymentHistory;
        return (
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row justify-between">
                    <h5 className="font-medium text-primary text-md">{schoolFeeName}</h5>
                    <span className="inline-flex flex-row space-x-4 items-center">
                        <h5 className="text-md">₦ {schoolFeeAmount}</h5>
                        <input type="checkbox" name="paid" checked={isPaymentComplete} />
                    </span>
                </div>
                <div className="flex bg-gray-100 rounded-lg flex-col text-sm space-y-4 py-4 px-6">
                    {payments &&
                        payments.map((payment, index) => (
                            <span className="inline-flex justify-between">
                                <span className="font-medium">Payment {String(index + 1)}</span>
                                <span>₦ {payment}</span>
                            </span>
                        ))}
                </div>
            </div>
        );
    }
    return null;
}

export default TermPaymentDetails;
