import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

const CheckoutInfo: React.FC = () => {
    return (
        <div className="checkout-info">
            <div className="row">
                <div className="col-12">
                    {/* ======= title ======= */}
                    <div className="title text-center">
                        <h1>Checkout Information</h1>
                    </div>
                </div>
                <div className="col-lg-8 offset-lg-2">
                    {/* ======= checkout-info area ======= */}
                    <div className="checkout-info-area">
                        <form>
                            {/* ===== contact-info ===== */}
                            <div className="contact-info">
                                <h5>Contact information</h5>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Email or Phone number" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ===== shipping-address ===== */}
                            <div className="shipping-address">
                                <h5>Shipping address</h5>
                                <div className="row">
                                    <div className="col-lg-6">
                                        {/* === first-name === */}
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        {/* === last-name === */}
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* === address === */}
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* === apartment === */}
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Apartment, suite, etc. (optional)" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        {/* === city === */}
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="City" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        {/* === postal-code === */}
                                        <div className="input-wrapper">
                                            <input type="text" placeholder="Postal Code" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ===== bottom-links ===== */}
                            <div className="bottom-links d-flex">
                                <Link to="/" className="d-flex align-items-center">
                                    <span><HiArrowNarrowLeft /></span>
                                    <p>Return to shopping cart</p>
                                </Link>
                                <input type="submit" value="Continue to Shipping" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutInfo;
