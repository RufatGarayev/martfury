import React from 'react';
import { AdvantagesData } from './AdvantagesData';

const Advantages: React.FC = () => {
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
}

export default Advantages;