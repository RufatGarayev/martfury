import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { IProducts } from '../../data/products';

interface IProps {
    product: IProducts;
    // increaseCount: (id: number) => void;
    // decreaseCount: (id: number) => void;
}

const Quantity: React.FC<IProps> = (props) => {
    const [size] = useState<number>(1);
    const { product } = props;

    // const dispatch = useDispatch();

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