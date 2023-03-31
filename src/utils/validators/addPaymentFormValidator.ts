import * as yup from 'yup';

const AddPaymentSchema = yup.object().shape({
    'School Fee': yup.string().required().typeError('School Fee is required'),
    'Amount Paid': yup.number().required().min(1).typeError('Amount paid is required'),
});

export default AddPaymentSchema;
