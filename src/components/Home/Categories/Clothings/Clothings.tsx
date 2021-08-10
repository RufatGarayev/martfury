import React from 'react';
// importing product card
import ProductCard from '../../../ProductCard/ProductCard';
// importing section header
import SectionHeader from '../../Other/SectionHeader';
// importing buttons
import { ButtonsAndLinkData } from '../ButtonsAndLinkData/ButtonsAndLinkData';
// importing owl-carousel
import OwlCarousel from 'react-owl-carousel';
// importing owl-carousel styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// importing owl-carousel options
import { Options } from '../../../Other/OwlCarouselOptions';

const Clothings: React.FC = () => {
    return (
        <div className="clothings">
            {/* ======= Section header ======= */}
            <div className="section-header-wrapper">
                <SectionHeader 
                    title="Clothings"
                    buttons={ButtonsAndLinkData}
                 />
            </div>
            {/* ======= Owl-carousel ======= */}
            <div className="owl-carousel-wrapper">
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
        </div>
    )
}

export default Clothings;