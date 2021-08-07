import React from 'react';
import CartTable from './CartTable';
import CartTotals from './CartTotals';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

const CartSection: React.FC = () => {
    return (
        <section id="cart-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* ======= title ======= */}
                        <div className="title text-center">
                            <h1>Shopping Cart</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* ======= cart table ======= */}
                        <CartTable />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        {/* ======= back-to-shop link ======= */}
                        <div className="back-to-shop-link">
                            <Link to="/shop" className="d-flex align-items-center">
                                <span><HiArrowNarrowLeft /></span>
                                <p className="m-0">Back to Shop</p>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* ======= cart-totals ======= */}
                        <div className="cart-totals-wrapper">
                            <CartTotals />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartSection;