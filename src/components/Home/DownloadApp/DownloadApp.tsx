import React from 'react';
import SubscribeForm from '../../Other/SubscribeForm';
import { Link } from 'react-router-dom';
import AppImg from '../../../assets/img/martfury-app/app-img.png';
import GooglePlay from '../../../assets/img/martfury-app/google-play.png';
import AppStore from '../../../assets/img/martfury-app/app-store.png';
import { ISmallImages } from '../../../types/types';

const DownloadApp: React.FC = () => {
    const SmallImages: ISmallImages[] = [
        { id: 1, img: GooglePlay },
        { id: 2, img: AppStore }
    ];

    return (
        <section id="download-app">
            <div className="container">
                <div className="download-app-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="app-img">
                                <img src={AppImg} alt="app" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="download-app-content">
                                <div className="text">
                                    <h3>Download Martfury App Now!</h3>
                                    <p>Shopping fastly and easily more with our app. Get a link to download the app on your phone</p>
                                </div>
                                <div className="subscribe-wrapper">
                                    <SubscribeForm />
                                </div>
                                <div className="small-imgs d-flex">
                                    {
                                        SmallImages.map(item => (
                                            <div key={item.id} className="small-img-wrapper">
                                                <Link to="#/">
                                                    <img src={item.img} alt="img" />
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DownloadApp;