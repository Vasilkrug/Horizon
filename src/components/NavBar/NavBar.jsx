import React from 'react';
import Logo from "../Logo/Logo";
import {sideBarData} from "../../dataForHtmlelements/data";
import {Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
import './NavBar.scss';
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {NavLink} from "react-router-dom";
import UpgradeInfo from "../UpgradeInfo/UpgradeInfo";

const NavBar = () => {
    const {collapseSidebar, collapsed} = useProSidebar();
    return (
        <Sidebar>
            <nav className={'nav'}>
                <Menu className={'nav-list'}>
                    <div className={'menu-button'}>
                        <HiOutlineMenuAlt3 onClick={() => collapseSidebar()} size={20} cursor={'pointer'}
                                           color={'#A3AED0'}/>
                    </div>
                    <Logo/>
                    {sideBarData.map(link => {
                        return <MenuItem
                            key={link.text}
                            icon={link.icon}>
                            <NavLink to={link.path}>{link.text}</NavLink>
                        </MenuItem>
                    })}
                </Menu>
                {!collapsed ? <UpgradeInfo/> : null}
            </nav>
        </Sidebar>
    );
};

export default NavBar;