/* eslint-disable indent */
import React, { useCallback, useState } from 'react';
import StudentAvatar from 'images/jpeg/student-avatar.jpeg';
import GreenCheckMark from 'components/atoms/a-green-check-mark';
import RedCrossMark from 'components/atoms/a-red-cross-mark';
import api from 'api';
import Toast from 'components/atoms/a-toast';
import Swal from 'sweetalert2';
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
    const [studentActiveField, setStudentActiveField] = useState<boolean>(studentData?.active);

    const addStudentOnclickHandler = () => {
        setIsOpenAddStudentPaymentModalForm(true);
        setRefreshStudentPaymentHistory(false);
    };

    const updateStudentActiveField = useCallback(async () => {
        try {
            const response = await api.post('students-admin-actions/', {
                uuid: studentUUID,
                active: studentActiveField !== true,
            });
            if (response.status === 200 && (response.data.message as string).toLowerCase() === 'success') {
                setStudentActiveField(response.data.data.active);
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

    const updateStudentActiveFieldOnclickHandler = () => {
        Swal.fire({
            title: `Are you sure you want to ${studentActiveField === true ? 'deactivate' : 'reactivate'} student?`,
            // eslint-disable-next-line quotes
            // text: 'Cheers',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#015cb1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
        }).then((result) => {
            if (result.isConfirmed) {
                updateStudentActiveField();
            }
        });
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
            {/* <div className="flex flex-col space-y-8"> */}
            <div className="flex h-[80vh] w-10/12 mx-auto">
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
                                                <tr className="border-b dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-2 py-4 font-medium">Active</td>
                                                    <td className="whitespace-nowrap px-2 py-4">
                                                        {studentActiveField ? <GreenCheckMark /> : <RedCrossMark />}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-4 my-4 mx-auto">
                                    <button
                                        type="button"
                                        onClick={addStudentOnclickHandler}
                                        className="rounded-md border border-secondary bg-secondary px-7 py-2 font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-primary"
                                    >
                                        Add payment
                                    </button>
                                    <button
                                        type="button"
                                        onClick={updateStudentActiveFieldOnclickHandler}
                                        className="rounded-md border border-secondary bg-secondary px-7 py-2 font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-primary"
                                    >
                                        {studentActiveField === true ? (
                                            <span>Deactivate Student</span>
                                        ) : (
                                            <span>Activate Student</span>
                                        )}
                                    </button>
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
            {/* </div> */}
        </>
    );
}

export default StudentDetailsCard;
