/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import api from 'api';
import Toast from 'components/atoms/a-toast';
import StudentInformationForm from 'components/organisms/o-student-information-form';
import React, { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import AddNewStudentSchema from 'utils/validators/addNewStudentFormValidator';

interface IUpdateStudentFormProps {
    studentUUID: string;
    studentData: any;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    refetchStudentData: () => Promise<void>;
}

function UpdateStudentForm({ studentData, studentUUID, setIsOpen, refetchStudentData }: IUpdateStudentFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AllFormFieldTypes>({ resolver: yupResolver(AddNewStudentSchema) });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<AllFormFieldTypes> = async (data) => {
        try {
            const response = await api.put(`students/${studentUUID}/`, {
                academicClass: {
                    id: data['Academic Class'],
                },
                name: data['Student Name'],
                dateOfBirth: data['Date of Birth'],
                nameOfGuardian: data['Parent/Guardian Name'],
                phoneNumberOfGuardian: data['Parent/Guardian Phone Number'],
                homeAddress: data['Home Address'],
            });

            if (response.status === 200) {
                Toast('Student information updated.', { type: 'success' });
                refetchStudentData();
                setIsOpen(false);
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
        <StudentInformationForm
            studentData={studentData}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            isSubmitting={isSubmitting}
        />
    );
}

export default UpdateStudentForm;
