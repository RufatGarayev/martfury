import React from 'react';
import { Link } from "react-router-dom";
import BrandLogo from '../../../assets/img/brand/brand.png';
import Search from './Search';
import Actions from './Actions';

const HeaderTop: React.FC = () => {
    return (
        <div className="header-top">
            {/* ======= Brand ======= */}
            <div className="brand">
                <Link to="/">
                    <img className="img-fluid" src={BrandLogo} alt="brand" />
                </Link>
            </div>
            {/* ======= Search ======= */}
            <div className="search-wrapper w-100">
                <Search />
            </div>
            {/* ======= Header-top actions ======= */}
            <div className="header-top-actions-wrapper">
                <Actions />
            </div>
        </div>
    )
}

export default HeaderTop;