import React from 'react';
import { BiRocket } from 'react-icons/bi';
import { AiOutlineSync } from 'react-icons/ai';
import { GoCreditCard } from 'react-icons/go';
import { ImBubbles3, ImGift } from 'react-icons/im';
import { IAdvantagesDataTypes } from '../../../types/types';

const Advantages: React.FC = () => {
    const AdvantagesData: IAdvantagesDataTypes[] = [
        { id: 1, icon: <BiRocket />, title: "Free Delivery", paragraph: "For all oders over $99" },
        { id: 2, icon: <AiOutlineSync />, title: "90 Days Return", paragraph: "If goods have problems" },
        { id: 3, icon: <GoCreditCard />, title: "Secure Payment", paragraph: "100% secure payment" },
        { id: 4, icon: <ImBubbles3 />, title: "24/7 Support", paragraph: "Dedicated support" },
        { id: 5, icon: <ImGift />, title: "Gift Service", paragraph: "Support gift service" }
    ];

    return (
        <section id="advantages">
            <div className="container-fluid">
                <div className="advantages-items-wrapper">
                    <ul>
                        {
                            AdvantagesData.map(item => (
                                <li key={item.id}>
                                    <div className="advantages-item">
                                        <span>{item.icon}</span>
                                        <h5>{item.title}</h5>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Advantages;