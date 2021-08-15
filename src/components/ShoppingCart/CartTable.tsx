import React from 'react';
import { Link } from 'react-router-dom';
import { IProducts } from '../../data/products';
import { useDispatch } from 'react-redux';
import {
    DeleteFromCart, IncreaseProductCount,
    DecreaseProductCount
} from '../../redux/actions/cartActions';
import Quantity from '../Other/Quantity';

interface IProps {
    cart: any;
}

const CartTable: React.FC<IProps> = (props) => {
    const { cart } = props.cart;

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
                                            <Link to="/">
                                                <img className="img-fluid" src={product.img} alt={product.title} />
                                            </Link>
                                        </div>
                                        {/* ======= Title ======= */}
                                        <div className="product-title">
                                            <h6>
                                                <Link to="/">
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
                                        <Quantity
                                            product={product}
                                            increaseCount={IncreaseProductCount}
                                            decreaseCount={DecreaseProductCount}
                                        />
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
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(DeleteFromCart(product.id))}
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
}

export default CartTable;