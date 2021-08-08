import React,{useState} from 'react';

const Quantity: React.FC = () => {
    const [size] = useState<number>(1);

    return (
        <div className="quantity-area d-flex align-items-center">
            <button className="minus-btn">
                −
            </button>
            <input type="text" size={size} readOnly value="1" />
            <button className="plus-btn">
                +
            </button>
        </div>
    )
}

export default Quantity;