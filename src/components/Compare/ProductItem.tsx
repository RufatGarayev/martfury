import React from 'react';
import { Link } from 'react-router-dom';
import { IProducts } from '../../data/products';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart, MakeIsInCartTrue } from '../../redux/actions/cartActions';
import { RootState } from '../../redux/reducers';
import { RemoveFromCompare } from '../../redux/actions/compareActions';
import { MakeIsInCompareFalse } from '../../redux/actions/productActions';
import { toast } from 'react-toastify';

interface IProps {
    product: IProducts;
}

const ProductItem: React.FC<IProps> = ({ product }) => {
    const cartState = useSelector((state: RootState) => state.cart);
    const cart = cartState.cart;
    const dispatch = useDispatch();

    cart.forEach((cartProduct: IProducts) => {
        if (cartProduct.id === product.id) {
            product.isInCart = cartProduct.isInCart;
        }
    });

    return (
        <div className="compare-product-item">
            <div className="top-part box">
                {/* ======= Remove button ======= */}
                <div className="remove-btn">
                    <button
                        type="button"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            dispatch(RemoveFromCompare(product.id));
                            dispatch(MakeIsInCompareFalse(product.id));
                            toast.error('"' + product.title + '" removed from the wishlist.');
                        }}
                    >
                        Remove
                    </button>
                </div>
                {/* ======= Image ======= */}
                <div className="book-img d-flex justify-content-center align-items-center">
                    <Link to="/">
                        <img className="img-fluid" src={product.img} alt={product.title} />
                    </Link>
                </div>
            </div>
            <div className="middle-part">
                {/* ======= Title ======= */}
                <div className="title">
                    <h6>
                        <Link to="/">{product.title}</Link>
                    </h6>
                </div>
                {/* ======= Price ======= */}
                <div className="price">
                    <p><span>$</span>{product.price.toFixed(2)}</p>
                </div>
                {/* ======= Description ======= */}
                <div className="description box">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, Ut enim ad minim veniam.
                    </p>
                </div>
                {/* ======= Rating ======= */}
                <div className="rating box">
                    <span>{product.rating}</span>
                </div>
            </div>
            <div className="bottom-part box d-flex align-items-center">
                <div className="add-to-cart-btn d-flex justify-content-center w-100">
                    {
                        product.isInCart ? (
                            // ======= Added To Cart button ======= //
                            <button
                                type="button"
                                className="disabledBtn w-100"
                                disabled
                            >
                                Added To Cart
                            </button>
                        ) : (
                            // ======= Add To Cart button ======= //
                            <button
                                type="button"
                                className="w-100"
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch(AddToCart(product));
                                    dispatch(MakeIsInCartTrue(product.id));
                                    toast.success('"' + product.title + '" added to the cart.');
                                }}
                            >
                                Add To Cart
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductItem;