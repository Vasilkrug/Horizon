import React, {useState} from 'react';
import './Modal.scss';

const Modal = ({title,children,onChange,inputValue}) => {


    return (
        <div className={'modal'}>
            <div className="modal-content">
                <div className="modal-title">{title}</div>
                <div className={'modal-body'}>
                    <input value={inputValue} onChange={(e) => onChange(e.target.value)} type="text"/>
                </div>
                <div className={'modal-footer'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;