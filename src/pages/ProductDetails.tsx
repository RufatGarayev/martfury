import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import ProductDetailsContent from '../components/ProductDetails/ProductDetailsContent';
import RelatedProducts from '../components/ProductDetails/RelatedProducts/RelatedProducts';

const ProductDetails: React.FC = () => {
    return (
        <div className="book-details-content">
            <div className="main">
                <Breadcrumb currentPage={"Book Details"} />
                <ProductDetailsContent />
                <RelatedProducts />
            </div>
        </div>
    )
}

export default ProductDetails;