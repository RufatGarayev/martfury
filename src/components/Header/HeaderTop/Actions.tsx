import React from 'react';
import { ActionsData } from './ActionsData';
import { HiOutlineUser } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Actions: React.FC = () => {
    return (
        <div className="header-top-actions d-flex">
            {/* ======= Left actions ======= */}
            <div className="left-actions">
                <ul>
                    {
                        ActionsData.map(item => (
                            <li key={item.id}>
                                <Link to={item.href} className={item.class}>
                                    {item.icon}
                                    <sup>0</sup>
                                </Link>
                                {item.dropdownContent}
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* ======= Right actions ======= */}
            <div className="right-actions d-flex">
                <div className="user-icon">
                    <span><HiOutlineUser /></span>
                </div>
                <div className="links">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Actions;