import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgMenuGridO } from 'react-icons/cg';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';

const NavigationList: React.FC = () => {
    return (
        <div id="navigation-list">
            <div className="navigation-list-content d-flex justify-content-between align-items-center">
                {/* === menu === */}
                <button type="button" className="nav-menu-btn d-flex flex-column align-items-center">
                    <span><GiHamburgerMenu /></span>
                    <p>Menu</p>
                </button>
                {/* === categories === */}
                <button type="button" className="sidebar-categories-btn d-flex flex-column align-items-center">
                    <span><CgMenuGridO /></span>
                    <p>Categories</p>
                </button>
                {/* === compare === */}
                <button type="button" className="compare-btn d-flex flex-column align-items-center">
                    <span><FiBarChart2 /></span>
                    <p>Compare</p>
                </button>
                {/* === wishlist === */}
                <button type="button" className="wishlist-btn d-flex flex-column align-items-center">
                    <span><BsHeart /></span>
                    <p>Wishlist</p>
                </button>
            </div>
        </div>
    )
};

export default NavigationList;
