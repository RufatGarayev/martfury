import React, { useState } from 'react';
// importing react-icons
import { FiBarChart2 } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ImEye } from 'react-icons/im';
// importing Link
import { Link } from 'react-router-dom';
// importing modal
import { Modal } from 'react-bootstrap';
// importing product info
import ProductInfo from '../ProductDetails/PrimaryInfo/ProductInfo';
import ImgSlider from '../ProductDetails/PrimaryInfo/ImgSlider';
// importing book img
import BookImg from '../../assets/img/products/book.jpg';


const ProductCard: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleShow = (): void => setShowModal(true);
    const handleClose = (): void => setShowModal(false);

    return (
        <>
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
                                {/* ===== Add-to-cart button ===== */}
                                <button type="button" title="Add To Cart">
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
                        <span>$1,200</span>
                        <del>1,362.99</del>
                    </p>
                </div>
                {/* ======= Title ======= */}
                <div className="product-title">
                    <h6>
                        <Link to="/product-details">
                            Apple Macbook Display 12
                        </Link>
                    </h6>
                </div>
                {/* ======= Rating ======= */}
                <div className="product-rating">
                    <span>★★★★★</span>
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
                                <ImgSlider />
                            </div>
                            <div className="col-lg-6">
                                <ProductInfo />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProductCard;