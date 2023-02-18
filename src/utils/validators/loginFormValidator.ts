import * as yup from 'yup';

const LoginSchema = yup.object().shape({
    Username: yup.string().required().typeError('Username is required'),
    Password: yup.string().required().min(5).typeError('Password is required'),
});

export default LoginSchema;
