/* eslint-disable react/no-unused-prop-types */
import React, { ChangeEvent } from 'react';
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import { ErrorStyle, CheckboxInputStyle } from '../field-styles';

interface CheckboxInputProps<T extends FieldValues> {
    label: Path<T>;
    className?: string;
    checkboxInfoText?: string;
    checked?: boolean;
    onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
    error: FieldError | undefined;
    register: UseFormRegister<T>;
}

function CheckboxInputField({
    label,
    className,
    error,
    checkboxInfoText,
    checked,
    onChangeHandler,
    register,
}: CheckboxInputProps<AllFormFieldTypes>) {
    return (
        <div className={className}>
            <input
                type="checkbox"
                className={CheckboxInputStyle}
                checked={checked}
                {...register(label)}
                onChange={onChangeHandler}
            />{' '}
            {checkboxInfoText}
            {error && <small className={ErrorStyle}>{error.message}</small>}
        </div>
    );
}

export default CheckboxInputField;
