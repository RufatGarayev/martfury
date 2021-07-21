import React from 'react';
import SectionHeader from '../Other/SectionHeader';
import ProductItem from './ProductItem';
import {ButtonsAndLinkData} from './ButtonsAndLinkData';

const NewArrivals: React.FC = () => {
    return (
        <section id="new-arrivals">
            <div className="container-fluid">
                {/* ======= Section header ======= */}
                <div className="section-header-wrapper">
                    <SectionHeader
                        title="Hot New Arrivals"
                        buttons={ButtonsAndLinkData}
                    />
                </div>
                {/* ======= Product item ======= */}
                <div className="product-item-wrapper d-flex">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </section>
    )
}

export default NewArrivals;