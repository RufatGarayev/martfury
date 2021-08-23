import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ProductDetailsContent from '../components/ProductDetails/ProductDetailsContent';
import RelatedProducts from '../components/ProductDetails/RelatedProducts/RelatedProducts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';

const ProductDetails: React.FC<any> = (props) => {
    const products = useSelector((state: RootState) => state.products);
    const propsId = props.match.params.id;
    const theProduct: any = products.products.find((product) => product.id === parseInt(propsId));
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        window.scrollTo(0, 0);

        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <div className="product-details-content">
            <div className="main">
                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <span>Product Details</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                {
                    loading ? (
                        <div className="container">
                            <div className="loading-wrapper">
                                <p>Loading...</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            <ProductDetailsContent product={theProduct} />
                            <RelatedProducts product={theProduct} />
                        </>
                    )
                }
            </div>
        </div>
    )
};

export default ProductDetails;