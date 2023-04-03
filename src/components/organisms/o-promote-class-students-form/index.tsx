import { yupResolver } from '@hookform/resolvers/yup';
import api from 'api';
import SpinnerIcon from 'components/atoms/a-spinner';
import Toast from 'components/atoms/a-toast';
import AcademicClassSelectInput from 'components/atoms/form-fields/a-academic-class-select-field';
import React, { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import PromoteClassStudentsFormSchema from 'utils/validators/promoteClassStudentsForm';

interface IPromoteClassStudentsFormProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function PromoteClassStudentsForm({ setIsOpen }: IPromoteClassStudentsFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AllFormFieldTypes>({ resolver: yupResolver(PromoteClassStudentsFormSchema) });

    const handleOnPromoteStudentsToNewAcademicClass = async (data: AllFormFieldTypes) => {
        try {
            const response = await api.post('academic-class-admin-actions/', {
                previousAcademicClassId: data['Previous Academic Class'],
                newAcademicClassId: data['New Academic Class'],
            });

            if (response.status === 200 && (response.data.message as string).toLowerCase() === 'success') {
                setIsOpen(false);
                Toast('All class students promoted.', { type: 'success' });
            }
        } catch (error) {
            let errorMessage;
            // @ts-ignore
            if (error.response) {
                // @ts-ignore
                [errorMessage] = error.response.data;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    };

    const onSubmit: SubmitHandler<AllFormFieldTypes> = async (data) => {
        Swal.fire({
            title: 'Are you sure you want to promote these students to a new class?',
            // eslint-disable-next-line quotes
            // text: 'Cheers',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#015cb1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleOnPromoteStudentsToNewAcademicClass(data);
            }
        });
    };

    return (
        <form className="flex flex-col p-8 w-2/3 mx-auto space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <AcademicClassSelectInput
                label={'Previous Academic Class'}
                register={register}
                error={errors['Previous Academic Class']}
            />
            <AcademicClassSelectInput
                label={'New Academic Class'}
                register={register}
                error={errors['New Academic Class']}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-block mx-auto shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-primary"
            >
                {isSubmitting ? <SpinnerIcon /> : <span>Promote Students</span>}
            </button>
        </form>
    );
}

export default PromoteClassStudentsForm;
