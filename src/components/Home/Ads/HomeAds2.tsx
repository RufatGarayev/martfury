import React from 'react';
import BedImg from '../../../assets/img/home-ads/fabric-bed.jpeg';
import IphoneImg from '../../../assets/img/home-ads/iphonex.jpeg';
import { Link } from 'react-router-dom';

const HomeAds2: React.FC = () => {
    return (
        <section id="ads-2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        {/* ======= Bed img ======= */}
                        <div className="bed-img">
                            <Link to="/shop">
                                <img src={BedImg} alt="bed" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* ======= Iphone img ======= */}
                        <div className="iphone-img">
                            <Link to="/shop">
                                <img src={IphoneImg} alt="iphonex" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAds2;