import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-top-wrapper">
                <HeaderTop />
            </div>
        </div>
    )
}

export default Header;