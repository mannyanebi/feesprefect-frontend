import * as yup from 'yup';

const UpdatePaymentSchema = yup.object().shape({
    'Amount Paid': yup.number().required().min(1).typeError('Amount paid is required'),
});

export default UpdatePaymentSchema;
