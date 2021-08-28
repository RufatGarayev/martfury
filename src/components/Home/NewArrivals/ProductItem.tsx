import React from 'react';
import { Link } from 'react-router-dom';
import { IProductProps } from '../../../types/types';

const ProductItem: React.FC<IProductProps> = ({ product }) => {
    return (
        <div className="product-item">
            <div className="product-item-img">
                <img src={product.img} alt={product.title} />
            </div>
            <div className="product-item-right-content">
                <div className="product-item-title">
                    <h6>
                        <Link to={`/product-details/${product.id}`}>
                            {product.title}
                        </Link>
                    </h6>
                </div>
                <div className="product-item-rating">
                    <span>{product.rating}</span>
                </div>
                <div className="product-item-price">
                    <p>
                        <span>${product.price.toFixed(2)}</span>
                        <del>${product.previousPrice?.toFixed(2)}</del>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ProductItem;