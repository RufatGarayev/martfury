import React from 'react';
import FilterSide from './FilterSide/FilterSide';

const ShopContent: React.FC = () => {
    return (
        <div className="shop-content-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <FilterSide />
                    </div>
                    <div className="col-lg-9"></div>
                </div>
            </div>
        </div>
    )
}

export default ShopContent;