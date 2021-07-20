import React from 'react';
// importing product card
import ProductCard from '../../ProductCard/ProductCard';
// importing owl-carousel
import OwlCarousel from 'react-owl-carousel';
// importing owl-carousel styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// data types for owl-carousel options
interface IOptions {
    margin: number;
    loop: boolean;
    dots: boolean;
    responsive: {
        0: {
            items: number;
        },
        500: {
            items: number;
        },
        768: {
            items: number;
        },
        1300: {
            items: number;
        }
    }
}

const DealOfTheDaySlider: React.FC = () => {
    const options: IOptions = {
        margin: 20,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 4,
            },
            1300: {
                items: 6,
            }
        },
    };

    return (
        <OwlCarousel
            className='owl-theme'
            {...options}
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
    )
}

export default DealOfTheDaySlider;