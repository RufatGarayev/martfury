import React, { useState } from 'react';
import { IProducts } from '../../data/products';

interface IProps {
    product: IProducts;
}

const Quantity: React.FC<IProps> = (props) => {
    const [size] = useState<number>(1);
    const { product } = props;

    return (
        <div className="quantity-area d-flex align-items-center">
            <button
                className="minus-btn"
                disabled={product.count === 1}
            >
                −
            </button>
            <input type="text" size={size} readOnly value={product.count} />
            <button
                className="plus-btn"
                disabled={product.count === 10}
            >
                +
            </button>
        </div>
    )
}

export default Quantity;