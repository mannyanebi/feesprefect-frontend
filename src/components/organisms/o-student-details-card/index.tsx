/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import StudentAvatar from 'images/jpeg/student-avatar.jpeg';
import TermPaymentDetails from 'components/molecules/m-term-payment-details';
import FormModal from '../o-form-modal';
import AddPaymentForm from '../o-add-payment-form';

interface IStudentDetailsCardProps {
    studentUUID: string;
    studentData: any;
}

function StudentDetailsCard({ studentUUID, studentData }: IStudentDetailsCardProps) {
    const [isOpenAddStudentPaymentModalForm, setIsOpenAddStudentPaymentModalForm] = useState<boolean>(false);

    const addStudentOnclickHandler = () => {
        setIsOpenAddStudentPaymentModalForm(true);
    };
    return (
        <>
            <FormModal
                title="Add Payment"
                isOpen={isOpenAddStudentPaymentModalForm}
                setIsOpen={setIsOpenAddStudentPaymentModalForm}
            >
                <AddPaymentForm
                    studentUUID={studentUUID}
                    academicClassId={studentData?.academicClass?.id}
                    setIsOpen={setIsOpenAddStudentPaymentModalForm}
                />
            </FormModal>
            <div className="flex flex-col space-y-8">
                <div className="flex h-[70vh] w-10/12 mx-auto">
                    <div className="h-full flex flex-col rounded-lg bg-white shadow-lg w-full dark:bg-neutral-700 md:flex-row py-12 px-8">
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
                                                        <td className="whitespace-nowrap px-2 py-4">
                                                            {studentData?.name}
                                                        </td>
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
                <div className="w-10/12 mx-auto">
                    <div className="flex flex-row space-x-4 mx-auto">
                        <button
                            type="button"
                            onClick={addStudentOnclickHandler}
                            className="rounded-md border border-secondary bg-secondary px-9 py-3 font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-primary"
                        >
                            Add student&apos;s payment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentDetailsCard;
