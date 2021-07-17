import React from 'react';
import { MonetaryUnitData, LanguageData } from './HeaderBottomData';
import EngImg from '../../../assets/img/language/en.png';

const LangAndMonetaryUnit: React.FC = () => {
    return (
        <div className="lang-and-monetary-unit">
            <ul>
                {/* ======= Monetary unit ======= */}
                <li className="monetary-unit">
                    <p>USD <span>⌵</span></p>
                    <ul className="monetary-unit-content">
                        {
                            MonetaryUnitData.map(item => (
                                <li key={item.id}>
                                    <span>{item.icon}</span> {item.title}
                                </li>
                            ))
                        }
                    </ul>
                </li>
                {/* ======= Language ======= */}
                <li className="language d-flex ">
                    <div className="lang-img">
                        <img className="img-fluid" src={EngImg} alt="en" />
                    </div>
                    <p>English <span>⌵</span></p>
                    <ul className="language-content d-none">
                        {
                            LanguageData.map(item => (
                                <li key={item.id} className="d-flex">
                                    <div className="lang-img">
                                        <img className="img-fluid" src={item.img} alt={item.title} />
                                    </div>
                                    <p>{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default LangAndMonetaryUnit;