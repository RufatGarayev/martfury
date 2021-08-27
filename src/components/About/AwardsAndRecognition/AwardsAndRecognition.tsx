import React from 'react';
import Award1 from '../../../assets/img/about/awards/award1.png';
import Award2 from '../../../assets/img/about/awards/award2.png';
import Award3 from '../../../assets/img/about/awards/award3.png';
import Award4 from '../../../assets/img/about/awards/award4.png';
import Award5 from '../../../assets/img/about/awards/award5.png';
import OwlCarousel from 'react-owl-carousel';
import { IAwards, IOwlCarouselOptionsAwards } from '../../../types/types';

const AwardsAndRecognition: React.FC = () => {
    const AwardsData: IAwards[] = [
        { id: 1, img: Award1, class: "award-1" },
        { id: 2, img: Award2, class: "award-2" },
        { id: 3, img: Award3, class: "award-3" },
        { id: 4, img: Award4, class: "award-4" },
        { id: 5, img: Award5, class: "award-5" }
    ];

    const Options: IOwlCarouselOptionsAwards = {
        margin: 20,
        loop: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            300: {
                items: 2,
            },
            500: {
                items: 3,
            },
            768: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        },
    };

    return (
        <section id="awards-and-recognition">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title">
                            <h2>Awards & Recognition</h2>
                            <p>
                                Industry leaders and influencers recognize Overstock as one of the
                                most trust worthy retail companies in the U.S.,
                                ranking high for both customer and employee satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="awards">
                            <OwlCarousel className='owl-theme' {...Options}>
                                {
                                    AwardsData.map(item => (
                                        <div key={item.id} className={item.class + " awards-img"}>
                                            <img src={item.img} alt="awards" />
                                        </div>
                                    ))
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AwardsAndRecognition;