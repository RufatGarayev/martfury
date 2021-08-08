import React from 'react';
import { Link } from "react-router-dom";
import BookImg from '../../../assets/img/products/book.jpg';

const DropdownCart: React.FC = () => {
    return (
        <div className="dropdownCart-wrapper">
            <div className="dropdownCart">
                <table>
                    <tbody className="table-body">
                        <tr>
                            <td>
                                {/* ======= Remove button ======= */}
                                <div className="remove-btn">
                                    <button type="button">
                                        ✕
                                    </button>
                                </div>
                            </td>
                            <td>
                                {/* ======= Image ======= */}
                                <div className="book-img">
                                    <Link to="/">
                                        <div className="img-wrapper">
                                            <img className="img-fluid" src={BookImg} alt="book" />
                                        </div>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <ul className="d-flex flex-column align-items-start">
                                    <li>
                                        {/* ======= Title ======= */}
                                        <h6 className="book-title">
                                            <Link to="/">
                                                Herschel Leather Duffle Bag In Brown Color
                                            </Link>
                                        </h6>
                                    </li>
                                    {/* ======= Count and Price ======= */}
                                    <li className="count-and-price">
                                        <small className="d-flex">
                                            <p className="total-price price d-flex align-items-center">
                                                <span>$</span> 1500.00
                                            </p>
                                            <span className="multiplication">×</span>
                                            <span className="book-count">2</span>
                                        </small>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* ======= Cart totals ======= */}
                <div className="total-area">
                    <div className="top-content d-flex justify-content-between">
                        <h6>Subtotal</h6>
                        <p><span>$</span>1500.00</p>
                    </div>
                    <div className="links d-flex align-items-center justify-content-between">
                        <div className="view-cart-btn text-center">
                            <Link to="/cart">View Cart</Link>
                        </div>
                        <div className="checkout-btn d-flex">
                            <Link
                                to="/checkout"
                                className="btn-style-2 w-100 text-center"
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownCart;