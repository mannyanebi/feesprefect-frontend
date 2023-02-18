import React from 'react';

interface IFooter {
    className?: string;
}

function Footer({ className = 'shrink-0' }: IFooter) {
    return <div className={`text-center ${className}`}>&copy; Feesprefect</div>;
}

export default Footer;
