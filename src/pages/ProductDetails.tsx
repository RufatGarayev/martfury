import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import ProductDetailsContent from '../components/ProductDetails/ProductDetailsContent';
import RelatedProducts from '../components/ProductDetails/RelatedProducts/RelatedProducts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';

const ProductDetails: React.FC<any> = (props) => {
    const products = useSelector((state: RootState) => state.products);
    const propsId = props.match.params.id;
    const theProduct: any = products.products.find((product) => product.id === parseInt(propsId));

    return (
        <div className="product-details-content">
            <div className="main">
                <Breadcrumb currentPage={"Product Details"} />
                <ProductDetailsContent product={theProduct} />
                <RelatedProducts />
            </div>
        </div>
    )
}

export default ProductDetails;