import React from 'react';
import DFPNLogo from 'images/svg/DFNPLogo.svg';
import { Link } from 'react-router-dom';

function FeesprefectLogo() {
    return (
        <Link to="/">
            <img src={DFPNLogo} className="w-[2rem] md:w-[2.5rem]" alt="Feesprefect Logo" />
        </Link>
    );
}

export default FeesprefectLogo;
