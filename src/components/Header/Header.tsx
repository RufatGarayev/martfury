import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-top-wrapper">
                <HeaderTop />
            </div>
            <div className="header-bottom-wrapper">
                <HeaderBottom />
            </div>
        </div>
    )
}

export default Header;