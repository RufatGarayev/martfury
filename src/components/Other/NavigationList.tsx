import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgMenuGridO } from 'react-icons/cg';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { ShowSidebarCategories, ShowSidebarMenu } from '../../redux/actions/primaryActions';
import { useDispatch } from 'react-redux';

const NavigationList: React.FC = () => {
    const dispatch = useDispatch();

    const handleShowMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(ShowSidebarMenu(true));
    };

    const handleShowCategories = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(ShowSidebarCategories(true));
    };

    return (
        <div id="navigation-list">
            <div className="navigation-list-content d-flex justify-content-between align-items-center">
                <button
                    type="button"
                    className="nav-menu-btn d-flex flex-column align-items-center"
                    onClick={handleShowMenu}
                >
                    <span><GiHamburgerMenu /></span>
                    <p>Menu</p>
                </button>
                <button
                    type="button"
                    className="sidebar-categories-btn d-flex flex-column align-items-center"
                    onClick={handleShowCategories}
                >
                    <span><CgMenuGridO /></span>
                    <p>Categories</p>
                </button>
                <Link to="/compare" className="compare-btn d-flex flex-column align-items-center">
                    <span><FiBarChart2 /></span>
                    <p>Compare</p>
                </Link>
                <Link to="/wishlist" className="wishlist-btn d-flex flex-column align-items-center">
                    <span><BsHeart /></span>
                    <p>Wishlist</p>
                </Link>
            </div>
        </div>
    )
};

export default NavigationList;