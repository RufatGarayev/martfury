import React from 'react';
import { AdsData1 } from './AdsData';
import { Link } from 'react-router-dom';

const HomeAds1: React.FC = () => {
    return (
        <section id="ads-1">
            <div className="container-fluid">
                <div className="row">
                    {
                        AdsData1.map(item => (
                            <div key={item.id} className="col-lg-4">
                                <div className="ads-img">
                                    <Link to="/shop">
                                        <img src={item.img} alt="ads-img" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HomeAds1;