import React from 'react';
import Department from './Department';
import LangAndMonetaryUnit from './LangAndMonetaryUnit';
import { NavLinksData } from './HeaderBottomData';
import { Link } from 'react-router-dom';

const HeaderBottom: React.FC = () => {
    return (
        <div className="header-bottom">
            {/* ======= Department ======= */}
            <div className="department-wrapper">
                <Department />
            </div>
            {/* ======= Nav links ======= */}
            <div className="nav-links-wrapper">
                <ul className="d-flex">
                    {
                        NavLinksData.map(link => (
                            <li key={link.id}>
                                <Link to={link.href} className={link.class}>
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* ======= Language and monetary unit ======= */}
            <div className="lang-and-monetary-unit-wrapper">
                <LangAndMonetaryUnit />
            </div>
        </div>
    )
}

export default HeaderBottom;