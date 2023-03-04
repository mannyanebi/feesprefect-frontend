import React, { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';

interface IDebouncedSearchInputProps {
    setSearchQuery: Dispatch<SetStateAction<string>>;
}

function DebouncedSearchInput({ setSearchQuery }: IDebouncedSearchInputProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchQuery(searchTerm);
        }, 2000);
        return () => clearTimeout(timer);
    }, [searchTerm, setSearchQuery]);

    // eslint-disable-next-line no-undef
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }, []);

    return (
        <div>
            <input type="text" onChange={handleChange} value={searchTerm} />
        </div>
    );
}

export default DebouncedSearchInput;
