import React from 'react';
import ImgSlider from './ImgSlider';
import ProductInfo from './ProductInfo';
import ProductsTab from './ProductTabs/ProductsTab';

const ProductContent: React.FC = () => {
    return (
        <section id="book-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ImgSlider />
                    </div>
                    <div className="col-lg-6">
                        <ProductInfo />
                    </div>
                </div>
                <div className="product-tabs-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <ProductsTab />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductContent;