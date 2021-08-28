import React from 'react';
import { Link } from 'react-router-dom';
import { IProductProps, IProducts } from '../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCart, MakeIsInCartTrue } from '../../redux/actions/cartActions';
import { RootState } from '../../redux/reducers';
import { RemoveFromCompare } from '../../redux/actions/compareActions';
import { MakeIsInCompareFalse } from '../../redux/actions/productActions';
import { toast } from 'react-toastify';

const ProductItem: React.FC<IProductProps> = ({ product }) => {
    const cartState = useSelector((state: RootState) => state.cart);
    const cart = cartState.cart;
    const dispatch = useDispatch();

    cart.map((cartProduct: IProducts) => cartProduct.id === product.id && (product.isInCart = true));

    return (
        <div className="compare-product-item">
            <div className="top-part box">
                <div className="remove-btn">
                    <button
                        type="button"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            dispatch(RemoveFromCompare(product.id));
                            dispatch(MakeIsInCompareFalse(product.id));
                            toast.error('"' + product.title + '" removed from the Wishlist.');
                        }}
                    >
                        Remove
                    </button>
                </div>
                <div className="book-img d-flex justify-content-center align-items-center">
                    <Link to={`/product-details/${product?.id}`}>
                        <img className="img-fluid" src={product.img} alt={product.title} />
                    </Link>
                </div>
            </div>
            <div className="middle-part">
                <div className="title">
                    <h6>
                        <Link to={`/product-details/${product?.id}`}>
                            {product.title}
                        </Link>
                    </h6>
                </div>
                <div className="price">
                    <p><span>$</span>{product.price.toFixed(2)}</p>
                </div>
                <div className="description box">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, Ut enim ad minim veniam.
                    </p>
                </div>
                <div className="rating box">
                    <span>{product.rating}</span>
                </div>
            </div>
            <div className="bottom-part box d-flex align-items-center">
                <div className="add-to-cart-btn d-flex justify-content-center w-100">
                    {
                        product.isInCart ? (
                            // ===== Added To Cart button ===== //
                            <button
                                type="button"
                                className="disabledBtn w-100"
                                disabled
                            >
                                Added To Cart
                            </button>
                        ) : (
                            // ===== Add To Cart button ===== //
                            <button
                                type="button"
                                className="w-100"
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    dispatch(AddToCart(product));
                                    dispatch(MakeIsInCartTrue(product.id));
                                    toast.success('"' + product.title + '" added to the Cart.');
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
};

export default ProductItem;