import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { RootState } from '../../redux/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { IProducts } from '../../types/types';
import { AddToCart, MakeIsInCartTrue } from '../../redux/actions/cartActions';
import { RemoveFromWishlist } from '../../redux/actions/wishlistActions';
import { MakeIsInWishlistFalse } from '../../redux/actions/productActions';
import { toast } from 'react-toastify';

const WishlistSection: React.FC = () => {
    const cartState = useSelector((state: RootState) => state.cart);
    const wishlistState = useSelector((state: RootState) => state.wishlist);
    const cart = cartState.cart;
    const wishlist = wishlistState.wishlist;
    const dispatch = useDispatch();

    cart.forEach((cartProduct: IProducts) => {
        wishlist.forEach((product: IProducts) => {
            if (cartProduct.id === product.id) {
                product.isInCart = cartProduct.isInCart;
            }
        });
    });

    return (
        <section id="wishlist">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* ======= title ======= */}
                        <div className="title text-center">
                            <h1>Wishlist</h1>
                        </div>
                    </div>
                </div>
                {
                    wishlist.length > 0 ? (
                        <>
                            <div className="row">
                                {/* ======= product-card ======= */}
                                <div className="col-12">
                                    <div className="wishlist-product-item">
                                        <table className="w-100">
                                            {/* ======= table-header ======= */}
                                            <thead>
                                                <tr>
                                                    <th>Remove</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Add to Cart</th>
                                                </tr>
                                            </thead>
                                            {/* ======= table-body ======= */}
                                            <tbody>
                                                {
                                                    wishlist.map((product: IProducts) => (
                                                        <tr key={product.id}>
                                                            <td>
                                                                {/* ===== remove-btn ===== */}
                                                                <div className="remove-btn">
                                                                    <button
                                                                        type="button"
                                                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                                            dispatch(RemoveFromWishlist(product.id));
                                                                            dispatch(MakeIsInWishlistFalse(product.id));
                                                                            toast.error('"' + product.title + '" removed from the Wishlist.');
                                                                        }}
                                                                    >
                                                                        ✕
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="img-td">
                                                                {/* ===== img ===== */}
                                                                <div className="product-img">
                                                                    <Link to={`/product-details/${product?.id}`}>
                                                                        <img src={product.img} className="img-fluid" alt={product.title} />
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {/* ===== name ===== */}
                                                                <div className="product-name">
                                                                    <Link to={`/product-details/${product?.id}`}>
                                                                        {product.title}
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {/* ===== price ===== */}
                                                                <div className="product-price">
                                                                    <p className="m-0">
                                                                        <span>$</span>{product.price.toFixed(2)}
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td className="btn-td">
                                                                {
                                                                    product.isInCart ? (
                                                                        // ===== added-to-cart-btn ===== //
                                                                        <div className="add-to-cart-btn d-flex">
                                                                            <button
                                                                                type="button"
                                                                                className="disabledBtn"
                                                                                disabled
                                                                            >
                                                                                Added to Cart
                                                                            </button>
                                                                        </div>
                                                                    ) : (
                                                                        // ===== add-to-cart-btn ===== //
                                                                        <div className="add-to-cart-btn d-flex">
                                                                            <button
                                                                                type="button"
                                                                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                                                    dispatch(AddToCart(product));
                                                                                    dispatch(MakeIsInCartTrue(product.id));
                                                                                    toast.success('"' + product.title + '" added to the Cart.');
                                                                                }}
                                                                            >
                                                                                Add to Cart
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                }

                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        // ======= alert ======= //
                        <>
                            <div className="empty-alert-wrapper">
                                <p className="m-0">Wishlist is currently empty.</p>
                            </div>
                            <div className="back-to-shop-link">
                                <Link to="/shop" className="d-flex align-items-center">
                                    <span><HiArrowNarrowLeft /></span>
                                    <p className="m-0">Back to Shop</p>
                                </Link>
                            </div>
                        </>
                    )
                }
            </div>
        </section>
    )
};

export default WishlistSection;