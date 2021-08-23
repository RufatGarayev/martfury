import React, { useState } from 'react';
import { SocialMediaData } from '../../Other/SocialMediaData';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, MakeIsInCartTrue } from '../../../redux/actions/cartActions';
import { AddToWishlist, MakeIsInWishlistTrueInWishlist } from '../../../redux/actions/wishlistActions';
import { AddToCompare, MakeIsInCompareTrueInCompare } from '../../../redux/actions/compareActions';
import { toast } from 'react-toastify';
import { RootState } from '../../../redux/reducers/index'
import { IProducts, IProductProps } from '../../../types/types';

const ProductInfo: React.FC<IProductProps> = ({ product }) => {
    const [size] = useState<number>(1);
    const cartState = useSelector((state: RootState) => state.cart);
    const wishlistState = useSelector((state: RootState) => state.wishlist);
    const compareState = useSelector((state: RootState) => state.compare);
    const cart = cartState.cart;
    const wishlist = wishlistState.wishlist;
    const compare = compareState.compare;
    const dispatch = useDispatch();

    cart.forEach((cartProduct: IProducts) => {
        if (cartProduct.id === product.id) {
            product.isInCart = true;
        }
    });

    wishlist.forEach((wishlistProduct: IProducts) => {
        if (wishlistProduct.id === product.id) {
            product.isInWishlist = true;
        }
    });

    compare.forEach((compareProduct: IProducts) => {
        if (compareProduct.id === product.id) {
            product.isInCompare = true;
        }
    });

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
                        <div className="quantity-area d-flex align-items-center">
                            <button
                                className="minus-btn"
                                disabled
                            >
                                −
                            </button>
                            <input type="text" size={size} readOnly value={1} />
                            <button
                                className="plus-btn"
                                disabled
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="add-to-cart-btn top-btn">
                        {/* ===== Add to Cart button ===== */}
                        <button
                            type="button"
                            title="Add To Cart"
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                dispatch(AddToCart(product));
                                dispatch(MakeIsInCartTrue(product.id));
                                toast.success('"' + product.title + '" added to the Cart');
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                    <div className="wishlist-btn top-btn">
                        {
                            product.isInWishlist ? (
                                // ======= Added to Wishlist Button ======= //
                                <button
                                    type="button"
                                    title="Added To Wishlist"
                                    className="disabledBtn"
                                    disabled
                                >
                                    <BsHeart />
                                </button>
                            ) : (
                                // ======= Add to Wishlist Button ======= //
                                <button
                                    type="button"
                                    title="Add To Wishlist"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        dispatch(AddToWishlist(product));
                                        dispatch(MakeIsInWishlistTrueInWishlist(product.id));
                                        toast.success('"' + product.title + '" added to the Wishlist.');
                                    }}
                                >
                                    <BsHeart />
                                </button>
                            )
                        }

                    </div>
                    <div className="compare-btn top-btn">
                        {
                            product.isInCompare ? (
                                // ===== Added to Compare button ===== //
                                <button
                                    type="button"
                                    title="Added To Compare"
                                    className="disabledBtn"
                                    disabled
                                >
                                    <FiBarChart2 />
                                </button>
                            ) : (
                                // ===== Add to Compare button ===== //
                                <button
                                    type="button"
                                    title="Add To Compare"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        dispatch(AddToCompare(product));
                                        dispatch(MakeIsInCompareTrueInCompare(product.id));
                                        toast.success('"' + product.title + '" added to the Compare.');
                                    }}
                                >
                                    <FiBarChart2 />
                                </button>
                            )
                        }

                    </div>
                </div>
                <div className="buy-now-link">
                    <Link to="/checkout" className="d-block text-center w-100">
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
};

export default ProductInfo;