import React from 'react';
import './GridItemBox.scss';

const GridItemBox = ({classname, left, right, children}) => {
    return (
        <div className={`grid-item-box ${classname}`}>
            <div className={'item-header'}>
                <div className="left-head">
                    <h3>{left}</h3>
                </div>
                <div className="right-head">{right}</div>
            </div>
            <div className={'item-body'}>
                {children}
            </div>
        </div>
    );
};

export default GridItemBox;