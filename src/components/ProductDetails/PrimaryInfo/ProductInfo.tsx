import React from 'react';
import Quantity from '../../Other/Quantity';
import { SocialMediaData } from '../../Other/SocialMediaData';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IProducts } from '../../../data/products';

interface IProps {
    product: IProducts;
}

const ProductInfo: React.FC<IProps> = ({ product }) => {

    return (
        <div className="product-info">
            {/* ===== title-and-rating ===== */}
            <div className="title-and-rating">
                <h5>{product?.title}</h5>
                <p>
                    <span className="rating">{product?.rating}</span>
                    <small className="review-count text-muted">(1 review)</small>
                </p>
            </div>
            {/* ===== price-and-description ===== */}
            <div className="price-and-description">
                <div className="price">
                    {
                        product?.previousPrice && (
                            <p className="old-price d-flex">
                                <span>$</span>
                                <del>{product?.previousPrice?.toFixed(2)}</del>
                            </p>
                        )
                    }
                    <p className="new-price">
                        <span>$</span>
                        <span>{product?.price.toFixed(2)}</span>
                    </p>
                </div>
                <div className="product-description">
                    <ul>
                        <li>Unrestrained and portable active stereo speaker</li>
                        <li>Free from the confines of wires and chords</li>
                        <li>20 hours of portable capabilities</li>
                        <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                        <li>3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                </div>
            </div>
            {/* ===== quantity-and-buttons ===== */}
            <div className="quantity-and-buttons">
                <div className="top-btns">
                    <div className="quantity-wrapper top-btn">
                        <Quantity
                            product={product}
                        />
                    </div>
                    <div className="add-to-cart-btn top-btn">
                        <button type="button">
                            Add to Cart
                        </button>
                    </div>
                    <div className="wishlist-btn top-btn">
                        <button type="button">
                            <BsHeart />
                        </button>
                    </div>
                    <div className="compare-btn top-btn">
                        <button type="button">
                            <FiBarChart2 />
                        </button>
                    </div>
                </div>
                <div className="buy-now-link">
                    <Link to="/" className="d-block text-center w-100">
                        Buy Now
                    </Link>
                </div>
            </div>
            {/* ===== sku-tags-and-categories ===== */}
            <div className="sku-tags-and-categories">
                <div className="sku">
                    <span>SKU:</span>
                    <p>SF1133569600-1</p>
                </div>
                <div className="categories">
                    <span>Categories:</span>
                    <ul>
                        <li>
                            <Link to="#/">Consumer Electronics</Link>,
                        </li>
                        <li>
                            <Link to="#/">Refrigerator</Link>
                        </li>
                    </ul>
                </div>
                <div className="tags">
                    <span>Tags:</span>
                    <ul>
                        <li>
                            <Link to="#/">sofa</Link>,
                        </li>
                        <li>
                            <Link to="#/">technologies</Link>,
                        </li>
                        <li>
                            <Link to="#/">wireless</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* ===== social-media ===== */}
            <div className="social-media">
                <ul className="d-flex">
                    {
                        SocialMediaData.map(item => (
                            <li key={item.id}>
                                <a href={item.href} className={item.class}>{item.icon}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductInfo;