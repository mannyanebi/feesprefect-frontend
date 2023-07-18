import { yupResolver } from '@hookform/resolvers/yup';
import api from 'api';
import SpinnerIcon from 'components/atoms/a-spinner';
import Toast from 'components/atoms/a-toast';
import CheckboxInputField from 'components/atoms/form-fields/a-checkbox-input-field';
import SchoolFeesSelectInput from 'components/atoms/form-fields/a-school-fees-select-field';
import TextInputField from 'components/atoms/form-fields/a-text-input-field';
import React, { Dispatch, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import AddPaymentSchema from 'utils/validators/addPaymentFormValidator';

interface IAddPaymentFormProps {
    studentUUID: string;
    academicClassId?: number;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setRefreshStudentPaymentHistory: Dispatch<SetStateAction<boolean>>;
}

function AddPaymentForm({
    academicClassId,
    setIsOpen,
    studentUUID,
    setRefreshStudentPaymentHistory,
}: IAddPaymentFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AllFormFieldTypes>({ resolver: yupResolver(AddPaymentSchema) });

    const onSubmit: SubmitHandler<AllFormFieldTypes> = async (data) => {
        try {
            const response = await api.post('school-fees-payment/', {
                student: {
                    uuid: studentUUID,
                },
                amountPaid: JSON.stringify(data['Amount Paid']),
                schoolFee: {
                    id: JSON.parse(data['School Fee']),
                },
                isRegistrationFeePayment: data['Is Registration Fee Payment'],
            });

            if (response.status === 201) {
                setIsOpen(false);
                setRefreshStudentPaymentHistory(true);
                Toast('Payment added.', { type: 'success' });
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

    return (
        <form className="flex flex-col p-8 w-2/3 mx-auto space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <SchoolFeesSelectInput
                label={'School Fee'}
                selectedValue={academicClassId}
                register={register}
                error={errors['School Fee']}
            />
            <TextInputField label={'Amount Paid'} type="number" register={register} error={errors['Amount Paid']} />
            <CheckboxInputField
                label="Is Registration Fee Payment"
                register={register}
                checkboxInfoText="Is this a registration fee payment?"
                error={errors['Is Registration Fee Payment']}
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

export default AddPaymentForm;
