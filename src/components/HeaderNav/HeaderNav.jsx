import React, {useState} from 'react';
import './HeaderNav.scss';
import {MdNotifications} from "react-icons/md";
import {HiMoon, HiOutlineMenuAlt3} from "react-icons/hi";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {avatar} from "../../assets/images/icons/icons";
import {sideBarData} from "../../dataForHtmlelements/data";
import MobileMenu from "../MobileMenu/MobileMenu";
import {NavLink} from "react-router-dom";

const HeaderNav = () => {
    const [showMenu,setShowMenu] = useState(false);

    const menuToggle = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="header-nav">
            <HiOutlineMenuAlt3 size={22} color={'#A3AED0'} className={'burger-btn'} onClick={menuToggle}/>
            <input className={'header-input'} type="text"/>
            <MdNotifications size={22} color={'#A3AED0'}/>
            <HiMoon size={22} color={'#A3AED0'}/>
            <AiOutlineInfoCircle size={22} color={'#A3AED0'}/>
            <img src={avatar} alt=""/>
            <MobileMenu classname={showMenu ? 'active' : ''}>
            {sideBarData.map(link => {
                return <NavLink to={link.path}>{link.text}</NavLink>
            })}
            </MobileMenu>
        </div>
    );
};

export default HeaderNav;