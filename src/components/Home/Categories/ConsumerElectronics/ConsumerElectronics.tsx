import React from 'react';
import ProductCard from '../../../ProductCard/ProductCard';
import SectionHeader from '../../Other/SectionHeader';
import OwlCarousel from 'react-owl-carousel';
import { Options } from '../../../Other/OwlCarouselOptions';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers/index';

const ConsumerElectronics: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);

    return (
        <div className="consumer-electronics">
            {/* ======= Section header ======= */}
            <div className="section-header-wrapper">
                <SectionHeader
                    title="Consumer Electronics"
                />
            </div>
            {/* ======= Owl-carousel ======= */}
            <div className="owl-carousel-wrapper">
                <OwlCarousel className='owl-theme' {...Options}>
                    {
                        products.products.map(product => (
                            product.category === "Consumer Electronics" && (
                                <div key={product.id} className='item'>
                                    <ProductCard product={product} />
                                </div>
                            )
                        ))
                    }
                </OwlCarousel>
            </div>
        </div>
    )
}

export default ConsumerElectronics;