import React, { ButtonHTMLAttributes } from 'react';

// eslint-disable-next-line no-undef
interface IButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    // eslint-disable-next-line no-undef
    icon?: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
}

function ButtonWithIcon({ children, icon: Icon, ...rest }: IButtonWithIconProps) {
    return (
        <button
            type="button"
            {...rest}
            className="inline-flex items-center gap-2 rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
            <span>{children}</span>
            {Icon && <Icon />}
        </button>
    );
}

export default ButtonWithIcon;
