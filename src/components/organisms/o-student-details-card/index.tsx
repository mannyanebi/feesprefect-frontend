/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import StudentAvatar from 'images/jpeg/student-avatar.jpeg';
import TermPaymentDetails from 'components/molecules/m-term-payment-details';

interface IStudentDetailsCardProps {
    studentData: any;
}

function StudentDetailsCard({ studentData }: IStudentDetailsCardProps) {
    return (
        <div className="flex h-[70vh] justify-center">
            <div className="h-full flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 w-10/12 md:flex-row py-12 px-8">
                <div className="w-2/5 flex flex-col justify-center items-center">
                    <div className="w-32 h-32 rounded-full">
                        <img className="rounded-full w-full h-full object-cover" src={StudentAvatar} alt="" />
                    </div>
                    <div className="p-16 flex flex-col w-full">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-2 py-4 font-medium">
                                                    Student Name
                                                </td>
                                                <td className="whitespace-nowrap px-2 py-4">{studentData?.name}</td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap px-2 py-4 font-medium">
                                                    Current Class
                                                </td>
                                                <td className="whitespace-nowrap px-2 py-4">
                                                    {studentData?.academicClass?.name}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 flex flex-col space-y-5 border-l justify-center p-6">
                    <div className="w-full flex flex-row space-x-4 items-center justify-between">
                        <h5 className="text-lg font-medium text-neutral-800">Payments</h5>
                        <h5 className="text-sm text-gray-500">Transaction History</h5>
                    </div>
                    <TermPaymentDetails />
                    <TermPaymentDetails />
                    <TermPaymentDetails />
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    );
}

export default StudentDetailsCard;
