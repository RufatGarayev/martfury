import React from 'react';
import { AwardsData } from './AwardsData';

const AwardsAndRecognition: React.FC = () => {
    return (
        <section id="awards-and-recognition">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        {/* ======= Title ======= */}
                        <div className="section-title">
                            <h2>Awards & Recognition</h2>
                            <p>
                                Industry leaders and influencers recognize Overstock as one of the most trust worthy retail companies in the U.S.,
                                ranking high for both customer and employee satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* ======= Awards ======= */}
                        <div className="awards">
                            {
                                AwardsData.map(item => (
                                    <div key={item.id} className="awards-img">
                                        <img src={item.img} alt="awards" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardsAndRecognition;