import React from 'react';
import { Link } from 'react-router-dom';
import BookImg from '../../assets/img/products/book.jpg';

const CartTable: React.FC = () => {
    return (
        <div className="cart-table">
            <table className="w-100">
                {/* ======= table-header ======= */}
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {/* ======= table-body ======= */}
                <tbody>
                    <tr>
                        <td>
                            <div className="product-img-title d-flex align-items-center">
                                {/* ======= Image ======= */}
                                <div className="product-img">
                                    <Link to="/">
                                        <img className="img-fluid" src={BookImg} alt="book" />
                                    </Link>
                                </div>
                                {/* ======= Title ======= */}
                                <div className="book-title">
                                    <h6>
                                        <Link to="/">
                                            Apple Macbook 15
                                        </Link>
                                    </h6>
                                </div>
                            </div>
                        </td>
                        <td>
                            {/* ======= Price ======= */}
                            <p className="book-price price m-0"><span>$</span>90.00</p>
                        </td>
                        <td>
                            {/* ======= Quantity ======= */}
                            <div className="quantity-wrapper">
                                {/* <Quantity /> */}
                                <p className="m-0">Quantity input</p>
                            </div>
                        </td>
                        <td>
                            {/* ======= Total price ======= */}
                            <p className="total-price price m-0">
                                <span>$</span>90.00
                            </p>
                        </td>
                        <td>
                            {/* ======= Remove button ======= */}
                            <div className="remove-btn">
                                <button type="button">✕</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartTable;