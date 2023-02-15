import React from 'react';
import './logo.scss';
import {IoLogoMastodon} from "react-icons/io5";

const Logo = () => {
    return (
        <div className="logo">
            <IoLogoMastodon/>
            <h2>Mastery</h2>
        </div>
    );
};

export default Logo;