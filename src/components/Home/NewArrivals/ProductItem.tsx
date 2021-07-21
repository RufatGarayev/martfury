import React from 'react';
import { Link } from 'react-router-dom';
import LaptopImg from '../../../assets/img/products/laptop.jpg';

const ProductItem: React.FC = () => {
    return (
        <div className="product-item">
            {/* ======= Image ======= */}
            <div className="product-item-img">
                <img src={LaptopImg} alt="book" />
            </div>
            <div className="product-item-right-content">
                {/* ======= Title ======= */}
                <div className="product-item-title">
                    <h6>
                        <Link to="#/">
                            Apple Macbook Display 12
                        </Link>
                    </h6>
                </div>
                {/* ======= Rating ======= */}
                <div className="product-item-rating">
                    <span>★★★★★</span>
                </div>
                {/* ======= Price ======= */}
                <div className="product-item-price">
                    <p>
                        <span>$1,200</span>
                        <del>1,362.99</del>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;