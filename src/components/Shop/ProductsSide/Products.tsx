import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';

const Products: React.FC = () => {
    return (
        <div className="products">
            <div className="row">
                <div className="col-lg-3">
                    <div className="item">
                        <ProductCard />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="item">
                        <ProductCard />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="item">
                        <ProductCard />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="item">
                        <ProductCard />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="item">
                        <ProductCard />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="item">
                        <ProductCard />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="item">
                        <ProductCard />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="item">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;