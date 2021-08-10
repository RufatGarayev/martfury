import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
// importing owl-carousel
import OwlCarousel from 'react-owl-carousel';
// importing owl-carousel styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// importing owl-carousel options
import { Options } from '../../Other/OwlCarouselOptions';

const RelatedProductsSlider: React.FC = () => {
    return (
        <div className="related-products-slider">
            <OwlCarousel
                className='owl-theme'
                {...Options}
            >
                <div className='item'>
                    <ProductCard />
                </div>
                <div className='item'>
                    <ProductCard />
                </div>
                <div className='item'>
                    <ProductCard />
                </div>
                <div className='item'>
                    <ProductCard />
                </div>
                <div className='item'>
                    <ProductCard />
                </div>
                <div className='item'>
                    <ProductCard />
                </div>
                <div className='item'>
                    <ProductCard />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default RelatedProductsSlider;