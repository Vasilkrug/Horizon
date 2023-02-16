import React from 'react';
import './MobileMenu.scss';

const MobileMenu = ({classname,children}) => {
    return (
        <div className={`mobile-menu ${classname}`}>
            <nav className="mobile-nav">
                {children}
            </nav>
        </div>
    );
};

export default MobileMenu;