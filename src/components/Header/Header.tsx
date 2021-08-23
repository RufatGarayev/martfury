import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/img/brand/brand.png";
import Search from "./HeaderTop/Search";
import Actions from "./HeaderTop/Actions";
import Department from "./HeaderBottom/Department";
import LangAndMonetaryUnit from "./HeaderBottom/LangAndMonetaryUnit";
import { NavLinksData } from "./HeaderBottom/HeaderBottomData";

const Header: React.FC = () => {
    return (
        <div className="header">
            {/* ======= Header-top ======= */}
            <div className="header-top-wrapper">
                <div className="header-top">
                    <div className="brand">
                        <Link to="/" onClick={() => window.location.href = "/"}>
                            <img className="img-fluid" src={BrandLogo} alt="brand" />
                        </Link>
                    </div>
                    <div className="search-wrapper w-100">
                        <Search />
                    </div>
                    <div className="header-top-actions-wrapper">
                        <Actions />
                    </div>
                </div>
            </div>
            {/* ======= Header-bottom ======= */}
            <div className="header-bottom-wrapper">
                <div className="header-bottom">
                    <div className="department-wrapper">
                        <Department />
                    </div>
                    <div className="nav-links-wrapper">
                        <ul className="d-flex">
                            {NavLinksData.map((link) =>
                                link.id === 1 ? (
                                    <li key={link.id}>
                                        <Link
                                            to={link.href}
                                            className={link.class}
                                            onClick={() => window.location.href = "/"}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ) : (
                                    <li key={link.id}>
                                        <Link to={link.href} className={link.class}>
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <div className="lang-and-monetary-unit-wrapper">
                        <LangAndMonetaryUnit />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;