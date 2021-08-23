import React from 'react';
import ProductCard from '../../../ProductCard/ProductCard';
import SectionHeader from '../../Other/SectionHeader';
import OwlCarousel from 'react-owl-carousel';
import { Options } from '../../../Other/OwlCarouselOptions';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers/index';

const Clothings: React.FC = () => {
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;

    return (
        <div className="clothings">
            {/* ======= Section header ======= */}
            <div className="section-header-wrapper">
                <SectionHeader
                    title="Clothings"
                />
            </div>
            {/* ======= Owl-carousel ======= */}
            <div className="owl-carousel-wrapper">
                <OwlCarousel className='owl-theme' {...Options}>
                    {
                        products.map(product => (
                            product.category === "Clothing & Apparel" && (
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

export default Clothings;