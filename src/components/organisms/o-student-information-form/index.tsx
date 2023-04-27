import React from 'react';
import AcademicClassSelectInput from 'components/atoms/form-fields/a-academic-class-select-field';
import TextInputField from 'components/atoms/form-fields/a-text-input-field';
import type { UseFormHandleSubmit, SubmitHandler, UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import SpinnerIcon from 'components/atoms/a-spinner';

interface IStudentInformationFormProps<T extends FieldValues> {
    studentData?: any;
    handleSubmit: UseFormHandleSubmit<T>;
    onSubmit: SubmitHandler<T>;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    isSubmitting: boolean;
}

function StudentInformationForm({
    studentData,
    handleSubmit,
    onSubmit,
    register,
    errors,
    isSubmitting,
}: IStudentInformationFormProps<AllFormFieldTypes>) {
    return (
        <form className="flex flex-col p-8 w-full mx-auto space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <TextInputField
                label={'Student Name'}
                type="text"
                value={studentData?.name}
                register={register}
                error={errors['Student Name']}
            />
            <AcademicClassSelectInput
                label={'Academic Class'}
                value={studentData?.academicClass?.id}
                register={register}
                error={errors['Academic Class']}
            />
            <TextInputField
                label={'Date of Birth'}
                type="date"
                value={studentData?.dateOfBirth}
                register={register}
                error={errors['Date of Birth']}
            />
            <TextInputField
                label={'Parent/Guardian Name'}
                type="text"
                value={studentData?.nameOfGuardian}
                register={register}
                error={errors['Parent/Guardian Name']}
            />
            <TextInputField
                label={'Parent/Guardian Phone Number'}
                type="number"
                value={studentData?.phoneNumberOfGuardian}
                register={register}
                error={errors['Parent/Guardian Phone Number']}
            />
            <TextInputField
                label={'Home Address'}
                type="text"
                value={studentData?.homeAddress}
                register={register}
                error={errors['Home Address']}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="inline-block mx-auto shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-primary"
            >
                {isSubmitting ? <SpinnerIcon /> : <span>Save</span>}
            </button>
        </form>
    );
}

export default StudentInformationForm;
