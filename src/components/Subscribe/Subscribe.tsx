import React from 'react';
import SubscribeForm from '../Other/SubscribeForm';

const Subscribe: React.FC = () => {
    return (
        <section id="subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="subscribe-text">
                            <h3>Newsletter</h3>
                            <p>Subcribe to get information about products and coupons</p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="subscribe-form">
                            <SubscribeForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Subscribe;