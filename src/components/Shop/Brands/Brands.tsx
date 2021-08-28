import React from 'react';
import HolaHire from '../../../assets/img/shop-brands/hoola-hire.jpg';
import PatelPsych from '../../../assets/img/shop-brands/patel-psych.jpg';
import PanaxPharma from '../../../assets/img/shop-brands/panax-pharma.jpg';
import WhitneyLarsen from '../../../assets/img/shop-brands/whitney-larsen.jpg';
import Lioit from '../../../assets/img/shop-brands/lioit.jpg';
import Suncity from '../../../assets/img/shop-brands/suncity.jpg';
import Analogue from '../../../assets/img/shop-brands/analogue.jpg';
import Cafe40 from '../../../assets/img/shop-brands/cafe-40.jpg';
import { IBrandsSection } from '../../../types/types';

const Brands: React.FC = () => {
    const BrandsData: IBrandsSection[] = [
        { id: 1, img: HolaHire, link: "#/" },
        { id: 2, img: PatelPsych, link: "#/" },
        { id: 3, img: PanaxPharma, link: "#/" },
        { id: 4, img: WhitneyLarsen, link: "#/" },
        { id: 5, img: Lioit, link: "#/" },
        { id: 6, img: Suncity, link: "#/" },
        { id: 7, img: Analogue, link: "#/" },
        { id: 8, img: Cafe40, link: "#/" }
    ];

    return (
        <div className="brands-section">
            <ul className="d-flex">
                {
                    BrandsData.map(brand => (
                        <li key={brand.id}>
                            <a href={brand.link}>
                                <img src={brand.img} alt="brand" />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Brands;