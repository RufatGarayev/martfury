import React from 'react';
import ImgSlider from './PrimaryInfo/ImgSlider';
import ProductInfo from './PrimaryInfo/ProductInfo';
import ProductTabs from './ProductTabs/ProductTabs';

const ProductDetailsContent: React.FC = () => {
    return (
        <section id="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ImgSlider />
                    </div>
                    <div className="col-lg-6">
                        <ProductInfo />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ProductTabs />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailsContent;