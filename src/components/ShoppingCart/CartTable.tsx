import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IProducts, ICartProps } from '../../types/types';
import { useDispatch } from 'react-redux';
import {
    DeleteFromCart, IncreaseProductCount, DecreaseProductCount
} from '../../redux/actions/cartActions';
import { MakeIsInCartFalse } from '../../redux/actions/productActions';
import { WishlistProductIsInCartFalse } from '../../redux/actions/wishlistActions';
import { CompareProductIsInCartFalse } from '../../redux/actions/compareActions';
import { toast } from 'react-toastify';

const CartTable: React.FC<ICartProps> = (props) => {
    const [size] = useState<number>(1);
    const { cart } = props;
    const dispatch = useDispatch();

    return (
        <div className="cart-table">
            <table className="w-100">
                {/* ======= table-header ======= */}
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {/* ======= table-body ======= */}
                <tbody>
                    {
                        cart.map((product: IProducts) => (
                            <tr key={product.id}>
                                <td>
                                    <div className="product-img-title d-flex align-items-center">
                                        {/* ======= Image ======= */}
                                        <div className="product-img">
                                            <Link to={`/product-details/${product.id}`}>
                                                <img className="img-fluid" src={product.img} alt={product.title} />
                                            </Link>
                                        </div>
                                        {/* ======= Title ======= */}
                                        <div className="product-title">
                                            <h6>
                                                <Link to={`/product-details/${product.id}`}>
                                                    {product.title}
                                                </Link>
                                            </h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {/* ======= Price ======= */}
                                    <p className="product-price price m-0"><span>$</span>{product.price.toFixed(2)}</p>
                                </td>
                                <td>
                                    {/* ======= Quantity ======= */}
                                    <div className="quantity-wrapper">
                                        <div className="quantity-area d-flex align-items-center">
                                            <button
                                                className="minus-btn"
                                                disabled={product.count === 1}
                                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                    dispatch(DecreaseProductCount(product.id));
                                                    toast.error('"' + product.title + '" removed from the Cart.');
                                                }}
                                            >
                                                −
                                            </button>
                                            <input type="text" size={size} readOnly value={product.count} />
                                            <button
                                                className="plus-btn"
                                                disabled={product.count === 10}
                                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                    dispatch(IncreaseProductCount(product.id));
                                                    toast.success('"' + product.title + '" added to the Cart.');
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {/* ======= Total price ======= */}
                                    <p className="total-price price m-0">
                                        <span>$</span>{(product.price * product.count).toFixed(2)}
                                    </p>
                                </td>
                                <td>
                                    {/* ======= Remove button ======= */}
                                    <div className="remove-btn">
                                        <button
                                            type="button"
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                dispatch(DeleteFromCart(product.id));
                                                dispatch(MakeIsInCartFalse(product.id));
                                                dispatch(WishlistProductIsInCartFalse(product.id));
                                                dispatch(CompareProductIsInCartFalse(product.id));
                                                toast.error('"' + product.title + '" removed from the Cart.');
                                            }}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default CartTable;