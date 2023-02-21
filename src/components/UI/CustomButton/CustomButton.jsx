import React from 'react';
import './CustomButton.scss';

const CustomButton = ({text,styles,onClick}) => {
    return (
        <button onClick={(e) => onClick(e)} className={'custom-button'} style={styles}>{text}</button>
    );
};

export default CustomButton;