import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChevronRight } from 'react-icons/vsc';
import { CategoriesData } from '../../Other/CategoriesData';
import { ShowSidebarCategories } from '../../../redux/actions/primaryActions';
import { useDispatch } from 'react-redux';

const Department: React.FC = () => {
    const dispatch = useDispatch();

    const handleCloseCategories =
        (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => {
            dispatch(ShowSidebarCategories(false));
        };

    return (
        <div className="department d-flex">
            <div className="icon">
                <span><GiHamburgerMenu /></span>
            </div>
            <div className="text">
                <h6>Shop by Department</h6>
            </div>
            <div className="title">
                <h6>CATEGORIES</h6>
                <button
                    type="button"
                    onClick={handleCloseCategories}
                >
                    ✕
                </button>
            </div>
            {/* ===== Departments ===== */}
            <ul className="departments">
                {
                    CategoriesData.map(item => (
                        item.submenu ? (
                            <li key={item.id}>
                                <Link to="/shop" onClick={handleCloseCategories} className="d-flex justify-content-between">
                                    <p className="m-0 p-0">
                                        <span>{item.icon}</span> {item.title}
                                    </p>
                                    <span className="right-arrow"><VscChevronRight /></span>
                                </Link>
                                <div className="submenu d-flex">
                                    {/* === Submenu-left === */}
                                    <div className="submenu-left">
                                        <h6>{item.submenuTitle}</h6>
                                        <ul>
                                            {
                                                item.submenu.map(submenuItem => (
                                                    <li key={submenuItem.id}>
                                                        <Link onClick={handleCloseCategories} to="/shop">
                                                            {submenuItem.title}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    {/* === Submenu-right === */}
                                    <div className="submenu-right">
                                        <h6>{item.submenuTitle2}</h6>
                                        <ul>
                                            {
                                                item.submenu.map(submenuItem2 => (
                                                    submenuItem2.category === "accessoriesAndParts" && (
                                                        <li key={submenuItem2.id}>
                                                            <Link onClick={handleCloseCategories} to="/shop">
                                                                {submenuItem2.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ) : (
                            <li key={item.id}>
                                <Link to="/shop" onClick={handleCloseCategories}>
                                    <span>{item.icon}</span> {item.title}
                                </Link>
                            </li>
                        )
                    ))
                }
            </ul>
        </div>
    )
};

export default Department;