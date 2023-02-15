import React from 'react';
import './Logo.scss';
import {IoLogoMastodon} from "react-icons/io5";

const Logo = () => {
    return (
        <div className="logo">
            <IoLogoMastodon/>
            <h2>Wons</h2>
        </div>
    );
};

export default Logo;