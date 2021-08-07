import React from 'react';
import { Link } from "react-router-dom";

const CartTotals: React.FC = () => {
    return (
        <div className="cart-totals">
            <div className="cart-totals-content">
                {/* ======= Title ======= */}
                <div className="cart-totals-title">
                    <h4>Cart Totals</h4>
                </div>
                {/* ======= Subtotal ======= */}
                <div className="subtotal price d-flex justify-content-between align-items-center">
                    <h6>Subtotal</h6>
                    <p>
                        <span>$</span>90.00
                    </p>
                </div>
                {/* ======= Grand total ======= */}
                <div className="grand-total price d-flex justify-content-between">
                    <h5>Total</h5>
                    <p>
                        <span>$</span>90.00
                    </p>
                </div>
            </div>
            {/* ======= Checkout button ======= */}
            <div className="checkout-btn">
                <Link
                    to="/checkout"
                    className="btn-style btn-style-2 text-center w-100"
                >
                    Proceed to Checkout
                </Link>
            </div>
        </div>
    )
}

export default CartTotals;