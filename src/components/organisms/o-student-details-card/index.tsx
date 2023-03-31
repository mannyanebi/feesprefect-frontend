import React, { useState } from 'react';
import StudentAvatar from 'images/jpeg/student-avatar.jpeg';
import FormModal from '../o-form-modal';
import AddPaymentForm from '../o-add-payment-form';
import StudentPaymentHistory from '../o-payment-history';

interface IStudentDetailsCardProps {
    studentUUID: string;
    studentData: any;
}

function StudentDetailsCard({ studentUUID, studentData }: IStudentDetailsCardProps) {
    const [isOpenAddStudentPaymentModalForm, setIsOpenAddStudentPaymentModalForm] = useState<boolean>(false);
    const [refreshStudentPaymentHistory, setRefreshStudentPaymentHistory] = useState<boolean>(false);

    const addStudentOnclickHandler = () => {
        setIsOpenAddStudentPaymentModalForm(true);
        setRefreshStudentPaymentHistory(false);
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
                    setRefreshStudentPaymentHistory={setRefreshStudentPaymentHistory}
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
                        <StudentPaymentHistory
                            studentUUID={studentUUID}
                            academicClassId={studentData?.academicClass?.id}
                            refreshStudentPaymentHistory={refreshStudentPaymentHistory}
                        />
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
