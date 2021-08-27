import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
    return (
        <div className="payment-success">
            <div className="row">
                <div className="col-12">
                    <div className="title text-center">
                        <h1>Payment Success</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="text">
                        <h5>Thank you! Your order is processing.</h5>
                        <p>Your order number is <strong>123</strong></p>
                        <p>
                            An email will be sent containing information about your purchase.
                            If you have any questions about your purchase, email us at <a href="/#">contact@martfury.com</a>
                        </p>
                    </div>
                    <div className="back-to-shop-btn">
                        <Link to="/shop" className="d-flex align-items-center">
                            <span><HiArrowNarrowLeft /></span>
                            <p className="m-0">Back to Shop</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PaymentSuccess;