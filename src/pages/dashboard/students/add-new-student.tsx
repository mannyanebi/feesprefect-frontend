import { yupResolver } from '@hookform/resolvers/yup';
import api from 'api';
import Toast from 'components/atoms/a-toast';
import StudentInformationForm from 'components/organisms/o-student-information-form';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import AddNewStudentSchema from 'utils/validators/addNewStudentFormValidator';

function AddNewStudent() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AllFormFieldTypes>({ resolver: yupResolver(AddNewStudentSchema) });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<AllFormFieldTypes> = async (data) => {
        try {
            const response = await api.post('students/', {
                academicClass: {
                    id: data['Academic Class'],
                },
                name: data['Student Name'],
                dateOfBirth: data['Date of Birth'],
                nameOfGuardian: data['Parent/Guardian Name'],
                phoneNumberOfGuardian: data['Parent/Guardian Phone Number'],
                homeAddress: data['Home Address'],
            });

            if (response.status === 201) {
                navigate('/dashboard/students');
                Toast('New student added.', { type: 'success' });
            }
        } catch (error) {
            let errorMessage;
            // @ts-ignore
            if (error.response) {
                // @ts-ignore
                [errorMessage] = error.response.data.non_field_errors;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    };

    return (
        <div className="w-3/5 mx-auto">
            <div className="flex flex-col justify-center items-center">
                <h2 className="m-4 font-bold text-2xl">Add a new student</h2>
                <StudentInformationForm
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                    errors={errors}
                    isSubmitting={isSubmitting}
                />
            </div>
        </div>
    );
}

export default AddNewStudent;
