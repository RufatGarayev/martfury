import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import Brands from '../components/Shop/Brands/Brands';
import FilterSide from '../components/Shop/FilterSide/FilterSide';
import ProductsSide from '../components/Shop/ProductsSide/ProductsSide';

const Shop: React.FC = () => {
    return (
        <div className="shop-content">
            <div className="main">
                <Breadcrumb currentPage={"Shop"} />

                {/* ======= shop-content ======= */}
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
            </div>
        </div>
    )
}

export default Shop;