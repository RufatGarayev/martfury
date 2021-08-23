import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import ProductInfo from '../ProductDetails/PrimaryInfo/ProductInfo';
import ImgSlider from '../ProductDetails/PrimaryInfo/ImgSlider';
import { IProducts, IProductProps } from '../../types/types';
import { AddToCart, MakeIsInCartTrue } from '../../redux/actions/cartActions';
import { AddToWishlist, MakeIsInWishlistTrueInWishlist } from '../../redux/actions/wishlistActions';
import { AddToCompare, MakeIsInCompareTrueInCompare } from '../../redux/actions/compareActions';
import { toast } from 'react-toastify';
import { RootState } from '../../redux/reducers/index';


const ProductCard: React.FC<IProductProps> = ({ product }) => {
    const cartState = useSelector((state: RootState) => state.cart);
    const wishlistState = useSelector((state: RootState) => state.wishlist);
    const compareState = useSelector((state: RootState) => state.compare);
    const cart = cartState.cart;
    const wishlist = wishlistState.wishlist;
    const compare = compareState.compare;

    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => setShowModal(true);
    const handleClose = (e?: React.MouseEvent<HTMLButtonElement>): void => setShowModal(false);
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
        <>
            <div className="product-card">
                <div className="card-top">
                    {/* ======= Label ======= */}
                    {
                        product?.label && (
                            <div className="product-label">
                                <span>{product?.label}</span>
                            </div>
                        )
                    }
                    {/* ======= Image ======= */}
                    <div className="product-img">
                        <Link to={`/product-details/${product?.id}`}>
                            <img src={product?.img} alt="laptop" />
                        </Link>
                    </div>
                    {/* ======= Actions ======= */}
                    <div className="product-actions">
                        <ul>
                            <li>
                                {
                                    product.isInCart ? (
                                        // ===== Added-to-cart button ===== //
                                        <button
                                            type="button"
                                            title="Added To Cart"
                                            className="disabledBtn"
                                            disabled
                                        >
                                            <span className="cart-icon">
                                                <AiOutlineShoppingCart />
                                            </span>
                                        </button>
                                    ) : (
                                        // ===== Add-to-cart button ===== //
                                        <button
                                            type="button"
                                            title="Add To Cart"
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                dispatch(AddToCart(product));
                                                dispatch(MakeIsInCartTrue(product.id));
                                                toast.success('"' + product.title + '" added to the Cart');
                                            }}
                                        >
                                            <span className="cart-icon">
                                                <AiOutlineShoppingCart />
                                            </span>
                                        </button>
                                    )
                                }
                            </li>
                            <li>
                                {/* ===== Show-quick button ===== */}
                                <button
                                    type="button"
                                    title="Quick View"
                                    onClick={handleShow}
                                >
                                    <span className="eye-icon">
                                        <ImEye />
                                    </span>
                                </button>
                            </li>
                            <li>
                                {
                                    product.isInWishlist ? (
                                        // ======= Added to Wishlist Button ======= //
                                        <button
                                            type="button"
                                            title="Added To Wishlist"
                                            className="disabledBtn"
                                            disabled
                                        >
                                            <span className="heart-icon">
                                                <BsHeart />
                                            </span>
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
                                            <span className="heart-icon">
                                                <BsHeart />
                                            </span>
                                        </button>
                                    )
                                }
                            </li>
                            <li>
                                {
                                    product.isInCompare ? (
                                        // ===== Added to Compare button ===== //
                                        <button
                                            type="button"
                                            title="Added To Compare"
                                            className="disabledBtn"
                                            disabled
                                        >
                                            <span className="compare-icon">
                                                <FiBarChart2 />
                                            </span>
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
                                            <span className="compare-icon">
                                                <FiBarChart2 />
                                            </span>
                                        </button>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                {/* ======= Price ======= */}
                <div className="product-price">
                    <p>
                        <span>${product?.price.toFixed(2)}</span>
                        {
                            product?.previousPrice && (
                                <del>${product?.previousPrice?.toFixed(2)}</del>
                            )
                        }
                    </p>
                </div>
                {/* ======= Title ======= */}
                <div className="product-title">
                    <h6>
                        <Link to={`/product-details/${product?.id}`}>
                            {product?.title}
                        </Link>
                    </h6>
                </div>
                {/* ======= Rating ======= */}
                <div className="product-rating">
                    <span>{product?.rating}</span>
                </div>
            </div>

            {/* ======= AddedToCart Modal ======= */}
            <Modal show={showModal} onHide={handleClose} className="quick-view-modal">
                <Modal.Body>
                    <div className="d-flex justify-content-end">
                        <button className="btnClose" onClick={() => handleClose()}>✖</button>
                    </div>
                    <div className="modal-product-info">
                        <div className="row">
                            <div className="col-lg-6">
                                <ImgSlider product={product} />
                            </div>
                            <div className="col-lg-6">
                                <ProductInfo product={product} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProductCard;