import React from 'react';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import { IProductProps, IReactImgGalleryOptions } from '../../../types/types';

interface Iimages {
    original: any;
    thumbnail: any;
}

const ImgSlider: React.FC<IProductProps> = ({ product }) => {
    // react-image-gallery options
    const options: IReactImgGalleryOptions = {
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