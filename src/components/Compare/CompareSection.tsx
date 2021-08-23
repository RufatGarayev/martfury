import React from 'react';
import ProductItem from './ProductItem';
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { IProducts } from '../../types/types';
import { RootState } from '../../redux/reducers/index';

SwiperCore.use([Navigation, A11y]);

const CompareSection: React.FC = () => {
    const compareState = useSelector((state: RootState) => state.compare);
    const compare = compareState.compare;

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
                {
                    compare.length > 0 ? (
                        <>
                            <div className="row">
                                <div className="col-12">
                                    {/* ======= compare-slider ======= */}
                                    <Swiper
                                        slidesPerView={1}
                                        navigation
                                        breakpoints={{
                                            "320": {
                                                "slidesPerView": 1,
                                                "spaceBetween": 0
                                            },
                                            "576": {
                                                "slidesPerView": 2,
                                                "spaceBetween": 0
                                            },
                                            "768": {
                                                "slidesPerView": 3,
                                                "spaceBetween": 0
                                            },
                                            "992": {
                                                "slidesPerView": 3,
                                                "spaceBetween": 0
                                            },
                                            "1200": {
                                                "slidesPerView": 4,
                                                "spaceBetween": 0
                                            }
                                        }}
                                    >
                                        <div className="compare-slider">
                                            {
                                                compare.map((product: IProducts) => (
                                                    <SwiperSlide key={product.id}>
                                                        <ProductItem product={product} />
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </>
                    ) : (
                        // ======= alert ======= //
                        <>
                            <div className="empty-alert-wrapper">
                                <p className="m-0">Compare is currently empty.</p>
                            </div>
                            <div className="back-to-shop-link">
                                <Link to="/shop" className="d-flex align-items-center">
                                    <span><HiArrowNarrowLeft /></span>
                                    <p className="m-0">Back to Shop</p>
                                </Link>
                            </div>
                        </>
                    )
                }
            </div>
        </section>
    )
}


export default CompareSection;