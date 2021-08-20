import React from 'react';
import ProductItem from './ProductItem';
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux';
import { IProducts } from '../../data/products';
import { RootState } from '../../redux/reducers/index';

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

const CompareSection: React.FC = () => {
    const compareState = useSelector((state: RootState) => state.compare);
    const compare = compareState.compare;

    const Options: IOptions = {
        margin: 0,
        loop: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1300: {
                items: 4,
            }
        },
    };

    return (
        <section id="compare">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* ======= title ======= */}
                        <div className="title text-center">
                            <h1>Compare Product</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* ======= compare-slider ======= */}
                        <div className="compare-slider-wrapper">
                            <OwlCarousel
                                className='owl-theme'
                                {...Options}
                            >
                                {
                                    compare.map((product: IProducts) => (
                                        <div key={product.id} className='item'>
                                            <ProductItem product={product} />
                                        </div>
                                    ))
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompareSection;