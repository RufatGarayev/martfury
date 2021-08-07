import React from 'react';
import { Link } from 'react-router-dom';
import BookImg from '../../assets/img/products/book.jpg';

const ProductItem: React.FC = () => {
    return (
        <div className="wishlist-product-item">
            <table className="w-100">
                <thead>
                    <tr>
                        <th>Remove</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Add to cart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {/* ===== remove-btn ===== */}
                            <div className="remove-btn">
                                <button type="button">✕</button>
                            </div>
                        </td>
                        <td className="img-td">
                            {/* ===== img ===== */}
                            <div className="product-img">
                                <Link to="/">
                                    <img src={BookImg} className="img-fluid" alt="product" />
                                </Link>
                            </div>
                        </td>
                        <td>
                            {/* ===== name ===== */}
                            <div className="product-name">
                                <Link to="/">Apple Macbook 15</Link>
                            </div>
                        </td>
                        <td>
                            {/* ===== price ===== */}
                            <div className="product-price">
                                <p className="m-0">
                                    <span>$</span>90.00
                                </p>
                            </div>
                        </td>
                        <td className="btn-td">
                            {/* ===== add-to-cart-btn ===== */}
                            <div className="add-to-cart-btn d-flex">
                                <button type="button">Add To Cart</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductItem;