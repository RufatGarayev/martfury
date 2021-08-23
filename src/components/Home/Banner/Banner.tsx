import React from 'react';
import Slider from './Slider';
import Img1 from '../../../assets/img/home-banner/other/img1.jpeg';
import Img2 from '../../../assets/img/home-banner/other/img2.jpeg';
import { Link } from 'react-router-dom';
import { IBannerRightDataTypes } from '../../../types/types';

const Banner: React.FC = () => {
    const BannerRightData: IBannerRightDataTypes[] = [
        { id: 1, img: Img1 },
        { id: 2, img: Img2 }
    ];

    return (
        <section id="home-banner">
            <div className="container-fluid">
                <div className="home-banner-content">
                    <div className="banner-slider-wrapper banner-left">
                        <Slider />
                    </div>
                    <div className="banner-right-imgs">
                        {
                            BannerRightData.map(item => (
                                <div key={item.id} className="banner-img-wrapper">
                                    <Link to="/shop">
                                        <img src={item.img} alt="banner-img" />
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;