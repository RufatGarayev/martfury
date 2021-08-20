import React from 'react';
import ProductCard from '../../../ProductCard/ProductCard';
import SectionHeader from '../../Other/SectionHeader';
import { ButtonsAndLinkData } from '../ButtonsAndLinkData/ButtonsAndLinkData';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Options } from '../../../Other/OwlCarouselOptions';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers/index';

const GardenAndKitchen: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);

    return (
        <div className="garden-and-kitchen">
            {/* ======= Section header ======= */}
            <div className="section-header-wrapper">
                <SectionHeader
                    title="Garden & Kitchen"
                    buttons={ButtonsAndLinkData}
                />
            </div>
            {/* ======= Owl-carousel ======= */}
            <div className="owl-carousel-wrapper">
                <OwlCarousel className='owl-theme' {...Options}>
                    {
                        products.products.map(product => (
                            product.category === "Home, Garden & Kitchen" && (
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

export default GardenAndKitchen;