import * as yup from 'yup';

const AddNewClassSchema = yup.object().shape({
    'Academic Class Name': yup.string().required().typeError('Class name is required'),
});

export default AddNewClassSchema;
