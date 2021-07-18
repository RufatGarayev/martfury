import React from 'react';
import Slider from './Slider';

const Banner: React.FC = () => {
    return (
        <section id="home-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="banner-slider-wrapper">
                            <Slider />
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Banner;