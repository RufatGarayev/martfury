import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Options } from "../../Other/OwlCarouselOptions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers/index";

const DealOfTheDaySlider: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);

    return (
        <OwlCarousel className="owl-theme" {...Options}>
            {
                products.products.map((product) =>
                    product.hasDiscount && (
                        <div key={product.id} className="item">
                            <ProductCard product={product} />
                        </div>
                    )
                )}
        </OwlCarousel>
    );
};

export default DealOfTheDaySlider;
