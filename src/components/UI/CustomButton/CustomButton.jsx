import React from 'react';
import './CustomButton.scss';

const CustomButton = ({text,styles}) => {
    return (
        <button className={'custom-button'} style={styles}>{text}</button>
    );
};

export default CustomButton;