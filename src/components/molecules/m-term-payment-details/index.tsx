import React from 'react';

function TermPaymentDetails() {
    return (
        <div className="flex flex-col space-y-3">
            <div className="flex flex-row justify-between">
                <h5 className="font-medium text-primary text-md">Term 1</h5>
                <span className="inline-flex flex-row space-x-4 items-center">
                    <h5 className="text-md">₦ 30,000</h5>
                    <input type="checkbox" name="paid" checked />
                </span>
            </div>
            <div className="flex bg-gray-100 rounded-lg flex-col text-sm space-y-4 py-4 px-6">
                <span className="inline-flex justify-between">
                    <span className="font-medium">Payment 1</span>
                    <span>₦ 10,000</span>
                </span>
                <span className="inline-flex justify-between">
                    <span className="font-medium">Payment 2</span>
                    <span>₦ 20,000</span>
                </span>
            </div>
        </div>
    );
}

export default TermPaymentDetails;
