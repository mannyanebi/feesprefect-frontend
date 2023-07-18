/* eslint-disable indent */
import React, { useCallback, useState } from 'react';
import StudentAvatar from 'images/jpeg/student-avatar.jpeg';
import GreenCheckMark from 'components/atoms/a-green-check-mark';
import RedCrossMark from 'components/atoms/a-red-cross-mark';
import api from 'api';
import Toast from 'components/atoms/a-toast';
import Swal from 'sweetalert2';
import ButtonWithIcon from 'components/atoms/a-button-with-icon';
import { AiFillEdit } from 'react-icons/ai';
import UpdateStudentForm from 'pages/dashboard/students/updated-student-form';
import { useNavigate } from 'react-router-dom';
import FormModal from '../o-form-modal';
import AddPaymentForm from '../o-add-payment-form';
import StudentPaymentHistory from '../o-payment-history';

interface IStudentDetailsCardProps {
    refetchStudentData: () => Promise<void>;
    studentUUID: string;
    studentData: any;
}

function StudentDetailsCard({ studentUUID, studentData, refetchStudentData }: IStudentDetailsCardProps) {
    const [isOpenAddStudentPaymentModalForm, setIsOpenAddStudentPaymentModalForm] = useState<boolean>(false);
    const [refreshStudentPaymentHistory, setRefreshStudentPaymentHistory] = useState<boolean>(false);
    const [studentActiveField, setStudentActiveField] = useState<boolean>(studentData?.active);
    const navigate = useNavigate();
    const [isOpenUpdateStudentModalForm, setIsOpenUpdateStudentModalForm] = useState<boolean>(false);

    const addStudentPaymentOnclickHandler = () => {
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

    const deleteStudent = useCallback(async () => {
        try {
            const response = await api.delete(`students/${studentUUID}`);
            if (response.status === 204) {
                navigate(-1);
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

    const deleteStudentOnclickHandler = () => {
        Swal.fire({
            title: 'Are you sure you want to delete this student?',
            // eslint-disable-next-line quotes
            // text: 'Cheers',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#015cb1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteStudent();
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
            <FormModal
                title="Update Student Information"
                isOpen={isOpenUpdateStudentModalForm}
                setIsOpen={setIsOpenUpdateStudentModalForm}
            >
                <UpdateStudentForm
                    refetchStudentData={refetchStudentData}
                    studentUUID={studentUUID}
                    studentData={studentData}
                    setIsOpen={setIsOpenUpdateStudentModalForm}
                />
            </FormModal>
            {/* <div className="flex flex-col space-y-8"> */}
            <div className="flex min-h-[80vh] w-11/12 mx-auto">
                <div className="h-full flex flex-col rounded-lg bg-white shadow-lg w-full dark:bg-neutral-700 md:flex-row py-12 px-8">
                    <div className="w-1/2 xl:w-3/5">
                        <ButtonWithIcon
                            icon={AiFillEdit}
                            /* @ts-ignore */
                            onClick={() => setIsOpenUpdateStudentModalForm(true)}
                        >
                            Edit
                        </ButtonWithIcon>
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="w-32 h-32 rounded-full">
                                <img className="rounded-full w-full h-full object-cover" src={StudentAvatar} alt="" />
                            </div>
                            <div className="px-8 xl:px-16 py-6 flex flex-col w-full">
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
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap px-2 py-4 font-medium">
                                                            Date of Birth
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-4">
                                                            {studentData?.dateOfBirth ?? 'N/A'}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap px-2 py-4 font-medium">
                                                            Name of Parent/Guardian
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-4">
                                                            {studentData?.nameOfGuardian ?? 'N/A'}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap px-2 py-4 font-medium">
                                                            Contact of Parent/Guardian
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-4">
                                                            {studentData?.phoneNumberOfGuardian ?? 'N/A'}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap px-2 py-4 font-medium">
                                                            Home Address
                                                        </td>
                                                        <td className="whitespace-nowrap px-2 py-4">
                                                            {studentData?.homeAddress ?? 'N/A'}
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap px-2 py-4 font-medium">
                                                            Active
                                                        </td>
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
                                            onClick={addStudentPaymentOnclickHandler}
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
                                        <button
                                            type="button"
                                            onClick={deleteStudentOnclickHandler}
                                            className="rounded-md border border-secondary bg-secondary px-7 py-2 font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring active:text-primary"
                                        >
                                            Delete Student
                                        </button>
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
            {/* </div> */}
        </>
    );
}

export default StudentDetailsCard;
