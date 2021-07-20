import React from 'react';
import Slider from './Slider';
import { BannerRightData } from './BannerData';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
    return (
        <section id="home-banner">
            <div className="container-fluid">
                <div className="home-banner-content">
                    {/* ======= Banner-left ======= */}
                    <div className="banner-slider-wrapper banner-left">
                        <Slider />
                    </div>
                    {/* ======= Banner-right ======= */}
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