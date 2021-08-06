import React from 'react';
import Brands from './Brands/Brands';
import FilterSide from './FilterSide/FilterSide';
import ProductsSide from './ProductsSide/ProductsSide';

const ShopContent: React.FC = () => {
    return (
        <div className="shop-content-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Brands />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <FilterSide />
                    </div>
                    <div className="col-lg-9">
                        <ProductsSide />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopContent;