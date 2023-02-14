/* eslint-disable react/function-component-definition */
import React from 'react';

type ContainerProps = {
    // eslint-disable-next-line react/require-default-props
    className?: string;
    // eslint-disable-next-line no-undef
} & React.HTMLAttributes<HTMLDivElement>;

const Container: React.FunctionComponent<ContainerProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default Container;
