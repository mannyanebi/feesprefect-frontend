/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import api from 'api';
import SpinnerIcon from 'components/atoms/a-spinner';
import Toast from 'components/atoms/a-toast';
import TextInputField from 'components/atoms/form-fields/a-text-input-field';
import TableWithPagination from 'components/molecules/m-student-list-react-table-with-pagination';
import React, { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AllFormFieldTypes from 'types/AllFormFieldTypes';
import headerColumns from 'libs/react-table-columns/StudentListTableColumns';
import SearchStudentSchema from 'utils/validators/searchStudentFormValidator';
import { AiOutlineSearch } from 'react-icons/ai';
import ButtonWithIcon from 'components/atoms/a-button-with-icon';

function SearchStudent() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AllFormFieldTypes>({ resolver: yupResolver(SearchStudentSchema) });
    const [studentsListData, setStudentsListData] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<AllFormFieldTypes> = async (data) => {
        try {
            setLoading(true);
            // const searchQuery = data['Search Name'];
            // const queryString: string = `students/?all&name__contains=${searchQuery}`;
            // const response = await api.get(queryString);
            // if (response.status === 200) {
            //     setStudentsListData(response.data);
            // }
            // setLoading(false);
        } catch (error) {
            setLoading(false);
            let errorMessage;
            // @ts-ignore
            if (error.response) {
                // @ts-ignore
                errorMessage = error.response.data.message;
            } else {
                errorMessage = 'Something went wrong';
            }
            Toast(errorMessage, { type: 'error' });
        }
    };

    const columns = useMemo(() => [...headerColumns], []);

    return (
        <div className="w-full">
            <h2 className="mx-2 font-bold text-2xl">Search students by Name:</h2>
            <div className="w-4/5 mx-auto">
                <form
                    className="flex flex-row p-8 w-2/3 mx-auto space-x-4 items-center justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextInputField
                        className="w-full"
                        label={'Search Name'}
                        type="text"
                        register={register}
                        error={errors['Search Name']}
                    />
                    {loading ? (
                        <button
                            type="button"
                            className="w-[10rem] h-[3.125rem] inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            <SpinnerIcon />
                        </button>
                    ) : (
                        <span>
                            <ButtonWithIcon type="submit" disabled={isSubmitting} icon={AiOutlineSearch}>
                                Search
                            </ButtonWithIcon>
                        </span>
                    )}
                </form>
            </div>
            {studentsListData.length > 0 ? (
                <TableWithPagination columns={columns} data={studentsListData} pageSizeValue={20} />
            ) : (
                <div className="flex items-center justify-center min-h-[30vh]">
                    <h2 className="m-4 text-center text-xl">Nothing to show, try searching a different name</h2>
                </div>
            )}
        </div>
    );
}

export default SearchStudent;
