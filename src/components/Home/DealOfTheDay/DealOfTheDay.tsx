import React from 'react';
import Countdown from './Countdown';
import { Link } from 'react-router-dom';
import ProductCard from "../../ProductCard/ProductCard";
import OwlCarousel from "react-owl-carousel";
import { Options } from "../../Other/OwlCarouselOptions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers/index";

const DealOfTheDay: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);

    return (
        <section id="deal-of-the-day">
            <div className="container-fluid">
                {/* ======= Section header ======= */}
                <div className="section-header-wrapper">
                    <div className="section-header">
                        <div className="left-side d-flex">
                            <div className="title">
                                <h4>Deal of the day</h4>
                            </div>
                            <div className="countdown-wrapper">
                                <Countdown />
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="view-all">
                                <Link to="/shop">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ======= Slider ======= */}
                <div className="slider-wrapper">
                    <OwlCarousel className="owl-theme" {...Options}>
                        {
                            products.products.map((product) =>
                                product.hasDiscount && (
                                    <div key={product.id} className="item">
                                        <ProductCard product={product} />
                                    </div>
                                )
                            )
                        }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
};

export default DealOfTheDay;