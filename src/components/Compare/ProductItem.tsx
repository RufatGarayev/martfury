import React from 'react';
import { Link } from 'react-router-dom';
import BookImg from '../../assets/img/products/book.jpg';

const ProductItem: React.FC = () => {
    return (
        <div className="compare-product-item">
            <div className="top-part box">
                {/* ======= Remove button ======= */}
                <div className="remove-btn">
                    <button type="button">Remove</button>
                </div>
                {/* ======= Image ======= */}
                <div className="book-img d-flex justify-content-center align-items-center">
                    <Link to="/">
                        <img className="img-fluid" src={BookImg} alt="product" />
                    </Link>
                </div>
            </div>
            <div className="middle-part">
                {/* ======= Title ======= */}
                <div className="title">
                    <h6>
                        <Link to="/">Apple Macbook Display 12</Link>
                    </h6>
                </div>
                {/* ======= Price ======= */}
                <div className="price">
                    <p><span>$</span>90.00</p>
                </div>
                {/* ======= Description ======= */}
                <div className="description box">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, Ut enim ad minim veniam.
                    </p>
                </div>
                {/* ======= Rating ======= */}
                <div className="rating box">
                    <span>★★★★★</span>
                </div>
            </div>
            <div className="bottom-part box d-flex align-items-center">
                <div className="add-to-cart-btn d-flex justify-content-center w-100">
                    {/* ======= Add To Cart button ======= */}
                    <button type="button" className="w-100">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;