import React from 'react';
import './HeaderNav.scss';
import {MdNotifications} from "react-icons/md";
import {HiMoon} from "react-icons/hi";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {avatar} from "../../assets/images/icons/icons";

const HeaderNav = () => {
    return (
        <div className="header-nav">
            <input type="text"/>
            <MdNotifications size={22} color={'#A3AED0'}/>
            <HiMoon size={22} color={'#A3AED0'}/>
            <AiOutlineInfoCircle size={22} color={'#A3AED0'}/>
            <img src={avatar} alt=""/>
        </div>
    );
};

export default HeaderNav;