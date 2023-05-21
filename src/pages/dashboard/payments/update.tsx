import { yupResolver } from '@hookform/resolvers/yup';
import api from 'api';
import SpinnerIcon from 'components/atoms/a-spinner';
import Toast from 'components/atoms/a-toast';
import TextInputField from 'components/atoms/form-fields/a-text-input-field';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import UpdatePaymentSchema from 'utils/validators/updatePaymentFormValidator';

function EditStudentPayment() {
    const navigate = useNavigate();
    const { paymentUUID, schoolFeeId } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AllFormFieldTypes>({ resolver: yupResolver(UpdatePaymentSchema) });

    const onSubmit: SubmitHandler<AllFormFieldTypes> = async (data) => {
        try {
            const response = await api.patch(`school-fees-payment/${paymentUUID}/`, {
                amountPaid: JSON.stringify(data['Amount Paid']),
                schoolFee: {
                    id: schoolFeeId,
                },
            });

            if (response.status === 200) {
                Toast('Payment updated.', { type: 'success' });
                navigate('/dashboard/payments');
            } else if (response.status === 500) {
                Toast(response.data.detail, { type: 'error' });
            }
        } catch (error) {
            let errorMessage;
            // @ts-ignore
            if (error.response && error.response.data) {
                // @ts-ignore
                errorMessage = error.response.data.detail;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    };

    return (
        <form className="flex flex-col p-8 w-2/3 mx-auto space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <TextInputField label={'Amount Paid'} type="number" register={register} error={errors['Amount Paid']} />
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

export default EditStudentPayment;
