import React from 'react';
import './PopUpMenu.scss';

const PopUpMenu = ({text,onClick}) => {
    return (
        <div className={'popup-menu'}>
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

export default PopUpMenu;