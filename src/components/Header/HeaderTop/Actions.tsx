import React from 'react';
import DropdownCart from './DropdownCart';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';

interface IActionDataTypes {
    id: number;
    href: string;
    sup: number;
    icon: JSX.Element;
    class: string;
    dropdownContent?: JSX.Element;
}

const Actions: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart);

    const ActionsData: IActionDataTypes[] = [
        {
            id: 1,
            href: "/compare",
            sup: 0,
            icon: <FiBarChart2 />,
            class: "first-link"
        },
        {
            id: 2,
            href: "/wishlist",
            sup: 0,
            icon: <BsHeart />,
            class: "second-link"
        },
        {
            id: 3,
            href: "#/",
            sup: cart.cart.length,
            icon: <AiOutlineShoppingCart />,
            class: "third-link",
            dropdownContent: <DropdownCart />
        }
    ];

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