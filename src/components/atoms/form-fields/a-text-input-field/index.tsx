/* eslint-disable react/no-unused-prop-types */
import React, { ChangeEvent } from 'react';
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import generateRandomString from 'utils/generateRandomString';
import { ErrorStyle, FieldNameStyle, InputStyle, LabelStyle } from '../field-styles';

interface TextInputFieldProps<T extends FieldValues> {
    label: Path<T>;
    labelName?: string;
    type: string;
    className?: string;
    inputFieldClassName?: string;
    value?: string | number;
    // eslint-disable-next-line no-undef
    onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
    error: FieldError | undefined;
    register: UseFormRegister<T>;
}

function TextInputField({
    label,
    labelName,
    type,
    className,
    inputFieldClassName,
    // value: fieldValue,
    // onChangeHandler,
    error,
    register,
}: TextInputFieldProps<AllFormFieldTypes>) {
    let classNameStyle: null | string;
    if (inputFieldClassName) {
        classNameStyle = `${InputStyle} ${inputFieldClassName}`;
    } else {
        classNameStyle = InputStyle;
    }

    const inputFieldId: string = label + generateRandomString(5);

    return (
        // <div className={className}>
        //     <label className={(labelName as string)?.length > 24 || label.length > 24 ? 'truncate' : ''}>
        //         {labelName || label}
        //     </label>
        //     <input
        //         type={type}
        //         className={classNameStyle}
        //         placeholder={placeholder}
        //         value={fieldValue}
        //         {...register(label)}
        //         onChange={onChangeHandler}
        //     />
        //     {error && <small className={errorStyle}>{error.message}</small>}
        // </div>
        <div className={className}>
            <label htmlFor={inputFieldId} className={LabelStyle}>
                <input
                    type={type}
                    id={inputFieldId}
                    placeholder="placeholder"
                    className={classNameStyle}
                    // value={fieldValue}
                    {...register(label)}
                    // onChange={onChangeHandler}
                />
                <span className={FieldNameStyle}>{labelName || label}</span>
            </label>
            {error && <small className={ErrorStyle}>{error.message}</small>}
        </div>
    );
}

export default TextInputField;
