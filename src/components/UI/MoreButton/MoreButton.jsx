import React from 'react';
import './MoreButton.scss';

const MoreButton = ({img}) => {
    return (
        <div className={'more-button'}>
            <button>{<img src={img} alt=""/>}</button>
        </div>
    );
};

export default MoreButton;