/* eslint-disable react/no-unused-prop-types */
import api from 'api';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import generateRandomString from 'utils/generateRandomString';
import Toast from 'components/atoms/a-toast';
import { ErrorStyle, FieldNameStyle, InputStyle, LabelStyle } from '../field-styles';

interface ISchoolFeesSelectInputProps<T extends FieldValues> {
    label: Path<T>;
    labelName?: string;
    className?: string;
    inputFieldClassName?: string;
    selectedValue?: string | number;
    // eslint-disable-next-line no-undef
    // onChangeHandler?: (event: ChangeEvent<HTMLSelectElement>) => void;
    error: FieldError | undefined;
    register: UseFormRegister<T>;
}

function SchoolFeesSelectInput({
    label,
    labelName,
    className,
    inputFieldClassName,
    selectedValue,
    // onChangeHandler,
    error,
    register,
}: ISchoolFeesSelectInputProps<AllFormFieldTypes>) {
    const [classList, setClassList] = useState<Array<any>>([]);
    const fetchAndSetClassList = useCallback(async () => {
        try {
            const response = await api.get('school-fees');
            if (response.status === 200) {
                setClassList(response.data);
            }
        } catch (apiError) {
            let errorMessage;
            // @ts-ignore
            if (apiError.response) {
                // @ts-ignore
                errorMessage = apiError.response.data.message;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    }, []);

    useEffect(() => {
        fetchAndSetClassList();
    }, [fetchAndSetClassList]);

    let classNameStyle: null | string;
    if (inputFieldClassName) {
        classNameStyle = `${InputStyle} ${inputFieldClassName}`;
    } else {
        classNameStyle = InputStyle;
    }

    const inputFieldId: string = label + generateRandomString(5);

    return (
        <div className={className}>
            <label htmlFor={inputFieldId} className={LabelStyle}>
                <select
                    id={inputFieldId}
                    // placeholder="placeholder"
                    className={classNameStyle}
                    {...register(label)}
                >
                    {classList.map((item) => (
                        // eslint-disable-next-line no-constant-condition
                        <option value={item.id} selected={true ? selectedValue === item.academicClass.id : false}>
                            {`${item.session.name} - ${item.academicClass.name} - ${item.session.term}`}
                        </option>
                    ))}
                </select>
                <span className={FieldNameStyle}>{labelName || label}</span>
            </label>
            {error && <small className={ErrorStyle}>{error.message}</small>}
        </div>
    );
}

export default SchoolFeesSelectInput;
