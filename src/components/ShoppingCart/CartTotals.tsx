import React from 'react';
import { IProducts } from '../../data/products';
import { Link } from "react-router-dom";

interface IProps {
    cart: any;
}

const CartTotals: React.FC<IProps> = (props) => {
    const { cart } = props;

    const totalPrice = cart.reduce((total: number, product: IProducts) => 
    (total += product.price * product.count), 0);

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
                        <span>$</span>{totalPrice.toFixed(2)}
                    </p>
                </div>
                {/* ======= Grand total ======= */}
                <div className="grand-total price d-flex justify-content-between">
                    <h5>Total</h5>
                    <p>
                        <span>$</span>{totalPrice.toFixed(2)}
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