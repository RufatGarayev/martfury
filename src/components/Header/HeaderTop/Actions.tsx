import React from 'react';
import DropdownCart from './DropdownCart';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart, BsBag } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import UserIcon from '../../../assets/img/other/user-icon.png';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';
import { ShowSearchArea } from '../../../redux/actions/primaryActions';
import { IActionDataTypes } from '../../../types/types';

const Actions: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const wishlist = useSelector((state: RootState) => state.wishlist);
    const compare = useSelector((state: RootState) => state.compare);
    const dispatch = useDispatch();

    const ActionsData: IActionDataTypes[] = [
        {
            id: 1,
            href: "/compare",
            sup: compare.compare.length,
            icon: <FiBarChart2 />,
            class: "first-link"
        },
        {
            id: 2,
            href: "/wishlist",
            sup: wishlist.wishlist.length,
            icon: <BsHeart />,
            class: "second-link"
        },
        {
            id: 3,
            href: "#/",
            sup: cart.cart.length,
            icon: <BsBag />,
            class: "third-link",
            dropdownContent: <DropdownCart />
        }
    ];

    return (
        <div className="header-top-actions d-flex">
            {/* ======= Left actions ======= */}
            <div className="left-actions">
                <ul>
                    <li>
                        <button
                            type="button"
                            className="search-btnn"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                dispatch(ShowSearchArea(true));
                            }}
                        >
                            <IoIosSearch />
                        </button>
                    </li>
                    {
                        ActionsData.map(item => (
                            <li key={item.id}>
                                <Link to={item.href} className={item.class}>
                                    {item.icon}
                                    <sup>{item.sup}</sup>
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
                    <Link to="/login">
                        <img src={UserIcon} alt="" />
                    </Link>
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