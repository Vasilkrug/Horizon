import React from 'react';
import './MoreButton.scss';

const MoreButton = ({img,onClick}) => {
    return (
        <div className={'more-button'}>
            <button onClick={onClick ? (e) => onClick(e) : null}>{<img src={img} alt=""/>}</button>
        </div>
    );
};

export default MoreButton;