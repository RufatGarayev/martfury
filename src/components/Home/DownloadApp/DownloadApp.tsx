import React from 'react';
import SubscribeForm from '../../Other/SubscribeForm';
import AppImg from '../../../assets/img/martfury-app/app-img.png';
import { SmallImages } from './SmallImages';
import { Link } from 'react-router-dom';

const DownloadApp: React.FC = () => {
    return (
        <section id="download-app">
            <div className="container-fluid">
                <div className="download-app-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* ======= App image ======= */}
                            <div className="app-img">
                                <img src={AppImg} alt="app" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="download-app-content">
                                {/* ======= Text ======= */}
                                <div className="text">
                                    <h3>Download Martfury App Now!</h3>
                                    <p>Shopping fastly and easily more with our app. Get a link to download the app on your phone</p>
                                </div>
                                {/* ======= Subscribe ======= */}
                                <div className="subscribe-wrapper">
                                    <SubscribeForm />
                                </div>
                                {/* ======= Small images ======= */}
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
}

export default DownloadApp;