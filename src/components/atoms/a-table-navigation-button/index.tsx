import React, { ButtonHTMLAttributes } from 'react';

// eslint-disable-next-line no-undef
interface ITableNavigationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

function TableNavigationButton({ children, ...rest }: ITableNavigationButtonProps) {
    return (
        <button
            className="bg-primary disabled:bg-gray-400 rounded-[1.5rem] text-white text-lg py-[0.4rem] px-[0.7rem]"
            type="button"
            {...rest}
        >
            {children}
        </button>
    );
}

export default TableNavigationButton;
