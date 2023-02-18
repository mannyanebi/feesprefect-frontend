import TextInputField from 'components/atoms/form-fields/a-text-input-field';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginFormFieldTypes } from 'types/AllFormFieldTypes';

function LoginForm() {
    const {
        register,
        handleSubmit,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { errors, isSubmitting },
    } = useForm<ILoginFormFieldTypes>();

    const onSubmit: SubmitHandler<ILoginFormFieldTypes> = async (data) => {
        // eslint-disable-next-line no-console
        console.log({ data });
    };

    return (
        <div id="login-form">
            <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <TextInputField label={'Username'} type="text" register={register} error={errors.Username} />
                <TextInputField label={'Password'} type="password" register={register} error={errors.Password} />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-block md:w-1/2 mx-auto shrink-0 rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
