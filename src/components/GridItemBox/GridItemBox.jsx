import React, {useState} from 'react';
import './GridItemBox.scss';
import PopUpMenu from "../PopUpMenu/PopUpMenu";
import {useIsVisible} from "../../hooks/useIsVisible";

const GridItemBox = ({classname, left, right, children,menu,popupOnclick}) => {
  const [isMenuVisible,showToggle] = useIsVisible(false);

    return (
        <div className={`grid-item-box ${classname}`}>
            <div className={'item-header'}>
                <div className={'left-head'}>
                    <h3>{left}</h3>
                </div>
                <div onClick={() => showToggle()} className={'right-head'}>
                    {right}
                    {isMenuVisible && menu ? <PopUpMenu text={menu} onClick={popupOnclick}/> : null}
                </div>
            </div>
            <div className={'item-body'}>
                {children}
            </div>
        </div>
    );
};

export default GridItemBox;