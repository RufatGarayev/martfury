import React from 'react';
import ProductItem from './ProductItem';

const WishlistSection: React.FC = () => {
    return (
        <section id="wishlist">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* ======= title ======= */}
                        <div className="title text-center">
                            <h1>Wishlist</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* ======= product-card ======= */}
                    <div className="col-12">
                        <ProductItem />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WishlistSection;