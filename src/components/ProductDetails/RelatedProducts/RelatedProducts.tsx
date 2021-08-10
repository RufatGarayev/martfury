import React from 'react';
import RelatedProductsSlider from './RelatedProductsSlider';

const RelatedProducts: React.FC = () => {
    return (
        <section id="related-products">
            <div className="container">
                <div className="related-products-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="title">
                                <h3>Related Products</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <RelatedProductsSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts;