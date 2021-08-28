import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ShippingInfo from '../components/Checkout/ShippingInfo/ShippingInfo';
import Payment from '../components/Checkout/Payment/Payment';
import PaymentSuccess from '../components/Checkout/PaymentSuccess/PaymentSuccess';
import { ClearCart } from '../redux/actions/cartActions';
import { MakeIsInCartFalse } from '../redux/actions/productActions';
import { CompareProductIsInCartFalse } from '../redux/actions/compareActions';
import { WishlistProductIsInCartFalse } from '../redux/actions/wishlistActions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers/index';
import { IProducts } from '../types/types';

const Checkout: React.FC = () => {
    const [showCheckoutPages, setShowCheckoutPages] = useState<boolean | string>(true);
    const [loading, setLoading] = useState(false);

    const cartState = useSelector((state: RootState) => state.cart);
    const cart = cartState.cart;
    const dispatch = useDispatch();

    const handleShippingInfoSubmit = () => setShowCheckoutPages(false);
    const backToShippingInfo = () => setShowCheckoutPages(true);

    const handlePaymentSubmit = () => {
        setShowCheckoutPages("");
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            dispatch(ClearCart());
            cart.forEach((cartProduct: IProducts) => dispatch(MakeIsInCartFalse(cartProduct.id)));
            cart.forEach((cartProduct: IProducts) => dispatch(CompareProductIsInCartFalse(cartProduct.id)));
            cart.forEach((cartProduct: IProducts) => dispatch(WishlistProductIsInCartFalse(cartProduct.id)));
        }, 2000);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="checkout-content">
            <div className="main">
                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>Checkout</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                <section id="checkout">
                    <div className="container">
                        {
                            showCheckoutPages ? (
                                <div className="shipping-info-wrapper">
                                    <ShippingInfo
                                        handleShippingSubmit={handleShippingInfoSubmit}
                                    />
                                </div>

                            ) : showCheckoutPages === false ? (

                                <div className="payment-wrapper">
                                    <Payment
                                        back={backToShippingInfo}
                                        cart={cart}
                                        handlePaymentSubmit={handlePaymentSubmit}
                                    />
                                </div>

                            ) : loading ? (

                                <p>Loading...</p>

                            ) : (
                                <div className="payment-success-wrapper">
                                    <PaymentSuccess />
                                </div>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Checkout;