import React from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

// interface IAliceCarousel {
//     duration: number;
//     autoPlay: boolean;
//     startIndex: number;
//     fadeOutAnimation: boolean;
//     mouseDragEnabled: boolean;
//     playButtonEnabled: boolean;
//     responsive: any;
// }

const DealOfTheDaySlider: React.FC = () => {
    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1024: {
            items: 3
        }
    };

    return (
        <div className="dealOfTheDay-slider d-flex">
            {/* <AliceCarousel
                duration={400}
                autoPlay={true}
                startIndex={1}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                playButtonEnabled={true}
                responsive={responsive}
            > */}
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            {/* </AliceCarousel> */}
        </div>
    )
}

export default DealOfTheDaySlider;