import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { IProducts } from '../../../types/types';

interface IProps {
    cart: any;
    back: () => void;
    handlePaymentSubmit: () => void;
}

const Payment: React.FC<IProps> = (props) => {
    const [showVisaContent, setShowVisaContent] = useState<boolean>(true);
    const [showPaypalContent, setShowPaypalContent] = useState<boolean>(false);
    const { cart } = props;

    const totalPrice = cart.reduce((total: number, product: IProducts) =>
        (total += product.price * product.count), 0);

    return (
        <div className="checkout-payment">
            <div className="row">
                <div className="col-12">
                    {/* ======= title ======= */}
                    <div className="title text-center">
                        <h1>Payment</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="checkout-payment-area">
                        <form onSubmit={() => props.handlePaymentSubmit()}>
                            {/* ===== shipping-method ===== */}
                            <div className="shipping-method">
                                <h5>Shipping Method</h5>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="int-shipping-wrapper d-flex justify-content-between align-items-center">
                                            <div className="text d-flex flex-column">
                                                <small className="text-muted">International</small>
                                                <small className="text-muted">Shipping</small>
                                            </div>
                                            <div className="price d-flex">
                                                <span>$</span>
                                                <small>20.00</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ===== payment-methods ===== */}
                            <div className="payment-methods">
                                <h5>Shipping address</h5>
                                <div className="inputs">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="radio-input-wrapper d-flex align-items-center">
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    id="visa"
                                                    checked={showVisaContent === true}
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        setShowVisaContent(true);
                                                        setShowPaypalContent(false);
                                                    }}
                                                />
                                                <label htmlFor="visa">Visa / Master Card</label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    id="paypal"
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                        setShowVisaContent(false);
                                                        setShowPaypalContent(true);
                                                    }}
                                                />
                                                <label htmlFor="paypal">Paypal</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                {/* === visa and master card === */}
                                                <div className={showVisaContent ? "for-visa-masterCard" : "d-none"}>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="input-wrapper">
                                                                <input type="text" placeholder="Card Number" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-wrapper">
                                                                <input type="text" placeholder="Card Holders" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="input-wrapper">
                                                                <input type="text" placeholder="Expiration Date (MM/YY)" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="input-wrapper">
                                                                <input type="text" placeholder="CVV" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="submit-btn-wrapper">
                                                                <input type="submit" value="Submit" className="w-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* === paypal === */}
                                                <div className={showPaypalContent ? "for-paypal" : "d-none"}>
                                                    <input
                                                        type="button"
                                                        value="Process with Paypal"
                                                        onClick={(e) => e.preventDefault()}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ===== bottom-links ===== */}
                            <div className="bottom-links d-flex">
                                <button
                                    type="button"
                                    className="d-flex align-items-center"
                                    onClick={() => props.back()}
                                >
                                    <span><HiArrowNarrowLeft /></span>
                                    <p>Return to shipping</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="cart-totals-and-orders">
                        {/* === top === */}
                        <div className="top d-flex justify-content-between">
                            <h6>PRODUCT</h6>
                            <h6>TOTAL</h6>
                        </div>
                        {/* === body === */}
                        <div className="body">
                            <ul>
                                {
                                    cart.map((product: IProducts) => (
                                        <li key={product.id} className="d-flex justify-content-between">
                                            <div className="left">
                                                <Link to={`/product-details/${product.id}`}>
                                                    <p className="title">{product.title}</p>
                                                    <p className="count text-muted">
                                                        Quantity:
                                                        <span> {product.count}</span>
                                                    </p>
                                                </Link>
                                            </div>
                                            <div className="right d-flex">
                                                <span>$</span>
                                                <p>{(product.price * product.count).toFixed(2)}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* === bottom === */}
                        <div className="bottom">
                            <div className="subtotal d-flex justify-content-between">
                                <h6>SUBTOTAL</h6>
                                <div className="price d-flex">
                                    <span>$</span>
                                    <p>{totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="total d-flex justify-content-between">
                                <h6>TOTAL</h6>
                                <div className="price d-flex">
                                    <span>$</span>
                                    <p>{totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;