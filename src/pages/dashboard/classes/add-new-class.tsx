import { yupResolver } from '@hookform/resolvers/yup';
import api from 'api';
import SpinnerIcon from 'components/atoms/a-spinner';
import Toast from 'components/atoms/a-toast';
import TextInputField from 'components/atoms/form-fields/a-text-input-field';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import AddNewClassSchema from 'utils/validators/addNewClassFormValidator';

function AddNewClass() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AllFormFieldTypes>({ resolver: yupResolver(AddNewClassSchema) });
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<AllFormFieldTypes> = async (data) => {
        try {
            const response = await api.post('academic-class/', {
                name: data['Academic Class Name'],
            });

            if (response.status === 201) {
                navigate('/dashboard/classes');
                Toast('New class added.', { type: 'success' });
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
            <h2 className="m-4 font-bold text-2xl">Add a new class</h2>
            <form className="flex flex-col p-8 w-2/3 mx-auto space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextInputField
                    label={'Academic Class Name'}
                    labelName={'Class Name'}
                    type="text"
                    register={register}
                    error={errors['Academic Class Name']}
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

export default AddNewClass;
