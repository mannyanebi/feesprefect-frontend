import * as yup from 'yup';

const PromoteClassStudentsFormSchema = yup.object().shape({
    'Previous Academic Class': yup.string().required().typeError('Previous academic class is required'),
    'New Academic Class': yup.string().required().typeError('New academic class is required'),
});

export default PromoteClassStudentsFormSchema;
