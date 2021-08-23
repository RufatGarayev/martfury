import React from 'react';
import ChairsImg from '../../../assets/img/home-ads/chairs.jpeg';
import ChargerImg from '../../../assets/img/home-ads/charger.jpeg';
import SpeakerImg from '../../../assets/img/home-ads/speaker.jpeg';
import { Link } from 'react-router-dom';
import { IAdsData1 } from '../../../types/types';

const HomeAds1: React.FC = () => {
    const AdsData1: IAdsData1[] = [
        { id: 1, img: SpeakerImg },
        { id: 2, img: ChairsImg },
        { id: 3, img: ChargerImg }
    ];

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