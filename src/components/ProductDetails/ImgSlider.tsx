import React from 'react';
import ProductImg1 from '../../assets/img/products/laptop.jpg';
import ProductImg2 from '../../assets/img/products/laptop2.jpg';
import ProductImg3 from '../../assets/img/products/laptop3.jpg';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';

interface IOptions {
    showPlayButton: boolean;
    showFullscreenButton: boolean;
    autoPlay: boolean;
};

interface Iimages {
    original: string;
    thumbnail: string;
}

const ImgSlider: React.FC = () => {
    const options: IOptions = {
        showPlayButton: false,
        showFullscreenButton: false,
        autoPlay: true
    };

    const images: Iimages[] = [
        {
            original: ProductImg1,
            thumbnail: ProductImg1,
        },
        {
            original: ProductImg2,
            thumbnail: ProductImg2,
        },
        {
            original: ProductImg3,
            thumbnail: ProductImg3,
        },
    ];

    return (
        <div className="img-slider">
            <ImageGallery
                items={images}
                {...options}
            />
        </div>
    )
}

export default ImgSlider;