import React from 'react';
import { Link } from "react-router-dom";
import { IProducts } from '../../../data/products';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';
import { DeleteFromCart } from '../../../redux/actions/cartActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DropdownCart: React.FC = () => {
    const cartState = useSelector((state: RootState) => state.cart);
    const cart = cartState.cart;
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((total: number, product: IProducts) =>
        (total += product.price * product.count), 0);

    return (
        <div className="dropdownCart-wrapper">
            <div className="dropdownCart">
                {
                    cart.length > 0 ? (
                        <>
                            {/* ======= Cart table ======= */}
                            <table>
                                <tbody className="table-body">
                                    {
                                        cart.map((product: IProducts) => (
                                            <tr key={product.id}>
                                                <td>
                                                    {/* ======= Remove button ======= */}
                                                    <div className="remove-btn">
                                                        <button
                                                            type="button"
                                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                                dispatch(DeleteFromCart(product.id));
                                                                toast.error('"' + product.title + '" removed from the cart.');
                                                            }}
                                                        >
                                                            ✕
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    {/* ======= Image ======= */}
                                                    <div className="product-img">
                                                        <Link to="/">
                                                            <div className="img-wrapper">
                                                                <img className="img-fluid" src={product.img} alt={product.title} />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ul className="d-flex flex-column align-items-start">
                                                        {/* ======= Title ======= */}
                                                        <li>
                                                            <h6 className="product-title">
                                                                <Link to="/">
                                                                    {product.title}
                                                                </Link>
                                                            </h6>
                                                        </li>
                                                        {/* ======= Count and Price ======= */}
                                                        <li className="count-and-price">
                                                            <small className="d-flex">
                                                                <p className="total-price price d-flex align-items-center">
                                                                    <span>$</span> {product.price.toFixed(2)}
                                                                </p>
                                                                <span className="multiplication">×</span>
                                                                <span className="book-count">{product.count}</span>
                                                            </small>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            {/* ======= Cart totals ======= */}
                            <div className="total-area">
                                <div className="top-content d-flex justify-content-between">
                                    <h6>Subtotal</h6>
                                    <p><span>$</span>{totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="links d-flex align-items-center justify-content-between">
                                    <div className="view-cart-btn text-center">
                                        <Link to="/cart">View Cart</Link>
                                    </div>
                                    <div className="checkout-btn d-flex">
                                        <Link
                                            to="/checkout"
                                            className="btn-style-2 w-100 text-center"
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        // ======= Empty cart ======= //
                        <div className="empty-cart">
                            <div className="alert-text text-center">
                                <p className="paragraph mb-1">
                                    No products in the Cart
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DropdownCart;