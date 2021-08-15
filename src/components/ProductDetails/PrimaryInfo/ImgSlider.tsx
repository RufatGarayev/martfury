import React from 'react';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import { IProducts } from '../../../data/products';

// data types
interface IOptions {
    showPlayButton: boolean;
    showFullscreenButton: boolean;
    autoPlay: boolean;
};

interface Iimages {
    original: any;
    thumbnail: any;
}

interface IProps {
    product: IProducts;
}

const ImgSlider: React.FC<IProps> = ({ product }) => {
    // react-image-gallery options
    const options: IOptions = {
        showPlayButton: false,
        showFullscreenButton: false,
        autoPlay: true
    };

    // images
    const images: Iimages[] = [
        {
            original: product?.img,
            thumbnail: product?.img,
        },
        {
            original: product?.img,
            thumbnail: product?.img,
        },
        {
            original: product?.img,
            thumbnail: product?.img,
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