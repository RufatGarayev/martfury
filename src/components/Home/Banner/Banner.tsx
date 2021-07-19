import React from 'react';
import Slider from './Slider';
import { BannerRightData } from './BannerData';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
    return (
        <section id="home-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        {/* ======= Banner-left ======= */}
                        <div className="banner-slider-wrapper banner-left">
                            <Slider />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            {/* ======= Banner-right ======= */}
                            <div className="banner-right-imgs">
                                {
                                    BannerRightData.map(item => (
                                        <div key={item.id} className="col-12">
                                            <div className="banner-img-wrapper">
                                                <Link to="/shop">
                                                    <img src={item.img} alt="banner-img" />
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;