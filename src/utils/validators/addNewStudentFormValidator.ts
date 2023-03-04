import * as yup from 'yup';

const AddNewStudentSchema = yup.object().shape({
    'Academic Class': yup.string().required().typeError('Academic Class is required'),
    'Student Name': yup.string().required().min(2).typeError('Student Name is Required'),
});

export default AddNewStudentSchema;
