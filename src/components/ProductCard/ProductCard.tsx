import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import ProductInfo from '../ProductDetails/PrimaryInfo/ProductInfo';
import ImgSlider from '../ProductDetails/PrimaryInfo/ImgSlider';
import { IProducts } from '../../data/products';
import { AddToCart } from '../../redux/actions/cartActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
    product: IProducts;
}

const ProductCard: React.FC<IProps> = ({ product }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShow = (): void => setShowModal(true);
    const handleClose = (): void => setShowModal(false);

    const dispatch = useDispatch();

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
                                {/* ===== Add-to-cart button ===== */}
                                <button
                                    type="button"
                                    title="Add To Cart"
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        dispatch(AddToCart(product));
                                        toast.success('"' + product.title + '" added to the cart');
                                    }}
                                >
                                    <span className="cart-icon">
                                        <AiOutlineShoppingCart />
                                    </span>
                                </button>
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
                                {/* ===== Add-to-wishlist button ===== */}
                                <button type="button" title="Add To Wishlist">
                                    <span className="heart-icon">
                                        <BsHeart />
                                    </span>
                                </button>
                            </li>
                            <li>
                                {/* ===== Add-to-compare button ===== */}
                                <button type="button" title="Add To Compare">
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