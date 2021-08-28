import React from 'react';
import LaptopImg2 from '../../../assets/img/other/laptop2.jpg';
import LaptopImg3 from '../../../assets/img/other/laptop3.jpg';
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import { IProductProps, IReactImgGalleryOptions, IReactImgGalleryimages } from '../../../types/types';

const ImgSlider: React.FC<IProductProps> = ({ product }) => {
    const options: IReactImgGalleryOptions = {
        showPlayButton: false,
        showFullscreenButton: false,
        autoPlay: true
    };

    const images: IReactImgGalleryimages[] = [
        {
            original: product?.img,
            thumbnail: product?.img,
        },
        {
            original: LaptopImg2,
            thumbnail: LaptopImg2,
        },
        {
            original: LaptopImg3,
            thumbnail: LaptopImg3,
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
};

export default ImgSlider;