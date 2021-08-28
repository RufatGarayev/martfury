import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import CartSection from '../components/ShoppingCart/CartSection';

const ShoppingCart: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="cart-content">
            <div className="main">
                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>Shopping Cart</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                <CartSection />
            </div>
        </div>
    )
};

export default ShoppingCart;