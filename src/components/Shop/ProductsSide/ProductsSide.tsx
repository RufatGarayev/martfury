import React from 'react';
import ProductsHeader from './ProductsHeader';
import Products from './Products';
import Pagination from './Pagination';

const ProductsSide: React.FC = () => {
    return (
        <div className="products-side">
            <ProductsHeader />
            <Products />
            <Pagination />
        </div>
    )
}

export default ProductsSide;