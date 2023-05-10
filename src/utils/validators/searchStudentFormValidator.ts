import * as yup from 'yup';

const SearchStudentSchema = yup.object().shape({
    'Search Name': yup.string().min(1).required().typeError('Search Name is required'),
});

export default SearchStudentSchema;
