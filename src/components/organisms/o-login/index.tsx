import React from 'react';
import api from 'api';
import TextInputField from 'components/atoms/form-fields/a-text-input-field';
import Toast from 'components/atoms/a-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginFormFieldTypes } from 'types/AllFormFieldTypes';
import SpinnerIcon from 'components/atoms/a-spinner';
import LoginSchema from 'utils/validators/loginFormValidator';
import { useNavigate } from 'react-router-dom';
import { setAuthToken } from 'utils/auth-cookies';

function LoginForm() {
    const {
        register,
        handleSubmit,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { errors, isSubmitting },
    } = useForm<ILoginFormFieldTypes>({ resolver: yupResolver(LoginSchema) });
    const navigate = useNavigate();

    // const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const onSubmit: SubmitHandler<ILoginFormFieldTypes> = async (data) => {
        try {
            const response = await api.post('auth/login/', {
                username: data.Username,
                password: data.Password,
            });

            if (response.status === 200) {
                setAuthToken(response.data.token);
                navigate('/dashboard');
                Toast('Login Successful', { type: 'success' });
            }
        } catch (error) {
            let errorMessage;
            // @ts-ignore
            if (error.response) {
                // @ts-ignore
                [errorMessage] = error.response.data.non_field_errors;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    };

    return (
        <div id="login-form">
            <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextInputField label={'Username'} type="text" register={register} error={errors.Username} />
                <TextInputField label={'Password'} type="password" register={register} error={errors.Password} />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block md:w-1/2 mx-auto shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-primary"
                >
                    {isSubmitting ? <SpinnerIcon /> : <span>Login</span>}
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
