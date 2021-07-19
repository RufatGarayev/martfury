import React from 'react';
// import { FiBarChart2 } from 'react-icons/fi';
// import { BsHeart } from 'react-icons/bs';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { ImEye } from 'react-icons/im';
import {Link} from 'react-router-dom';
import LaptopImg from '../../assets/img/products/laptop.jpg';

const ProductCard: React.FC = () => {
    return (
        <div className="product-card">
            {/* ======= Label ======= */}
            <div className="product-label">
                <span>-14%</span>
            </div>
            {/* ======= Image ======= */}
            <div className="product-img">
                <img src={LaptopImg} alt="laptop" />
            </div>
            {/* ======= Actions ======= */}
            <div className="product-actions">
            </div>
            {/* ======= Price ======= */}
            <p className="product-price">
                <span>$1,200</span>
                <del>1,362.99</del>
            </p>
            {/* ======= Title ======= */}
            <div className="product-title">
                <h6>
                    <Link to="#/">
                        Apple Macbook Retina Display 12
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