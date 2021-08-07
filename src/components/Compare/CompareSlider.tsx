import React from 'react';
// importing product item
import ProductItem from './ProductItem';
// importing owl-carousel
import OwlCarousel from 'react-owl-carousel';
// importing owl-carousel styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// importing owl-carousel options
import { Options } from './OwlCarouselOptions';

const CompareSlider: React.FC = () => {
    return (
        <OwlCarousel
            className='owl-theme'
            {...Options}
        >
            <div className='item'>
                <ProductItem />
            </div>
            <div className='item'>
                <ProductItem />
            </div>
            <div className='item'>
                <ProductItem />
            </div>
            <div className='item'>
                <ProductItem />
            </div>
        </OwlCarousel>
    )
}

export default CompareSlider;