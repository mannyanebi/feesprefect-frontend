import api from 'api';
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import Toast from '../a-toast';

interface IClassListDropdownProps {
    filterBy: string;
    setFilterBy: Dispatch<SetStateAction<string>>;
}
function ClassListDropdown({ setFilterBy, filterBy }: IClassListDropdownProps) {
    const [classList, setClassList] = useState<Array<any>>([]);
    const fetchAndSetClassList = useCallback(async () => {
        try {
            const response = await api.get('academic-class/');
            if (response.status === 200) {
                setClassList(response.data.results);
            }
        } catch (error) {
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
    }, []);

    useEffect(() => {
        fetchAndSetClassList();
    }, [fetchAndSetClassList]);
    return (
        <select value={filterBy} onChange={(event) => setFilterBy(event.target.value)}>
            <option value="">All</option>
            {/* <option value="pre-nursery">Pre Nursery</option>
            <option value="nursery-1">Nursery 1</option>
            <option value="nursery-2">Nursery 2</option>
            <option value="nursery-3">Nursery 2</option>
            <option value="primary-1">Primary 1</option>
            <option value="primary-2">Primary 2</option>
            <option value="primary-3">Primary 3</option>
            <option value="primary-4">Primary 4</option>
            <option value="primary-5">Primary 5</option> */}
            {classList.map((item) => (
                <option value={item.id}>{item.name}</option>
            ))}
        </select>
    );
}

export default ClassListDropdown;
