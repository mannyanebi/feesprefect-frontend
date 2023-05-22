import * as yup from 'yup';

const AddNewStudentSchema = yup.object().shape({
    'Academic Class': yup.string().required().typeError('Academic Class is required'),
    'Student Name': yup.string().required().min(2).typeError('Student Name is Required'),
    'Date of Birth': yup.string().required().typeError('Date of Birth is Required'),
});

export default AddNewStudentSchema;
