import React from 'react';
// importing react-icons
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
// importing Link
import { Link } from 'react-router-dom';
// importing book img
import BookImg from '../../assets/img/products/book.jpg';


const ProductCard: React.FC = () => {
    return (
        <div className="product-card">
            <div className="card-top">
                {/* ======= Label ======= */}
                <div className="product-label">
                    <span>-14%</span>
                </div>
                {/* ======= Image ======= */}
                <div className="product-img">
                    <img src={BookImg} alt="laptop" />
                </div>
                {/* ======= Actions ======= */}
                <div className="product-actions">
                    <ul>
                        <li>
                            {/* ===== Add to cart button ===== */}
                            <button type="button">
                                <span className="cart-icon">
                                    <AiOutlineShoppingCart />
                                </span>
                            </button>
                        </li>
                        <li>
                            {/* ===== Show quick button ===== */}
                            <button type="button">
                                <span className="eye-icon">
                                    <ImEye />
                                </span>
                            </button>
                        </li>
                        <li>
                            {/* ===== Add to wishlist button ===== */}
                            <button type="button">
                                <span className="heart-icon">
                                    <BsHeart />
                                </span>
                            </button>
                        </li>
                        <li>
                            {/* ===== Add to compare button ===== */}
                            <button type="button">
                                <span className="compare-icon">
                                    <FiBarChart2 />
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {/* ======= Price ======= */}
            <div className="product-price">
                <p>
                    <span>$1,200</span>
                    <del>1,362.99</del>
                </p>
            </div>
            {/* ======= Title ======= */}
            <div className="product-title">
                <h6>
                    <Link to="#/">
                        Apple Macbook Display 12
                    </Link>
                </h6>
            </div>
            {/* ======= Rating ======= */}
            <div className="product-rating">
                <span>★★★★★</span>
            </div>
        </div>
    )
}

export default ProductCard;