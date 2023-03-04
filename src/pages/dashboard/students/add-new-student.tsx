import { yupResolver } from '@hookform/resolvers/yup';
import api from 'api';
import SpinnerIcon from 'components/atoms/a-spinner';
import Toast from 'components/atoms/a-toast';
import AcademicClassSelectInput from 'components/atoms/form-fields/a-academic-class-select-field';
import TextInputField from 'components/atoms/form-fields/a-text-input-field';
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
        <div>
            <h2 className="m-4 font-bold text-2xl">Add a new student</h2>
            <form className="flex flex-col p-8 w-2/3 mx-auto space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextInputField label={'Student Name'} type="text" register={register} error={errors['Student Name']} />
                <AcademicClassSelectInput
                    label={'Academic Class'}
                    register={register}
                    error={errors['Academic Class']}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block mx-auto shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-primary"
                >
                    {isSubmitting ? <SpinnerIcon /> : <span>Save</span>}
                </button>
            </form>
        </div>
    );
}

export default AddNewStudent;
