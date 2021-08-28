import React from 'react';
import { Link } from "react-router-dom";
import { IProducts } from '../../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';
import { DeleteFromCart } from '../../../redux/actions/cartActions';
import { MakeIsInCartFalse } from '../../../redux/actions/productActions';
import { WishlistProductIsInCartFalse } from '../../../redux/actions/wishlistActions';
import { CompareProductIsInCartFalse } from '../../../redux/actions/compareActions';
import { ShowOrHideDropdownCart } from '../../../redux/actions/primaryActions';
import { toast } from 'react-toastify';

const DropdownCart: React.FC = () => {
    const cartState = useSelector((state: RootState) => state.cart);
    const primaryState = useSelector((state: RootState) => state.primary);
    const cart = cartState.cart;
    const showOrHideDropdCart = primaryState.showOrHideDropdownCart;
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((total: number, product: IProducts) =>
        (total += product.price * product.count), 0);

    const closeDropdownCart = (e: React.MouseEvent<HTMLAnchorElement>) => {
        dispatch(ShowOrHideDropdownCart());
    };

    return (
        <div className={showOrHideDropdCart ? "dropdownCart-wrapper show-dropdownCart" : "dropdownCart-wrapper"}>
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
                                                                dispatch(MakeIsInCartFalse(product.id));
                                                                dispatch(WishlistProductIsInCartFalse(product.id));
                                                                dispatch(CompareProductIsInCartFalse(product.id));
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
                                                        <Link
                                                            to={`/product-details/${product.id}`}
                                                            onClick={closeDropdownCart}
                                                        >
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
                                                                <Link
                                                                    to={`/product-details/${product.id}`}
                                                                    onClick={closeDropdownCart}
                                                                >
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
                                        <Link
                                            to="/cart"
                                            onClick={closeDropdownCart}
                                        >
                                            View Cart
                                        </Link>
                                    </div>
                                    <div className="checkout-btn d-flex">
                                        <Link
                                            to="/checkout"
                                            className="btn-style-2 w-100 text-center"
                                            onClick={closeDropdownCart}
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        // ======= alert ======= //
                        <div className="empty-cart">
                            <div className="alert-text text-center">
                                <p className="paragraph mb-1">
                                    No products in the cart.
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default DropdownCart;