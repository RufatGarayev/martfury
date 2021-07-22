import React from 'react';
import { PaymentData } from './FooterBottomData';

const FooterBottom: React.FC = () => {
    return (
        <div className="footer-bottom">
            <div className="row">
                <div className="col-lg-6">
                    {/* ======= Copyright ======= */}
                    <div className="copyright">
                        <p>
                            © 2021 Martfury. Created by
                            <a
                                href="https://rufatgarayev.netlify.app/"
                                target="__blank"
                            >
                                Rufat Garayev
                            </a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    {/* ======= Payment ======= */}
                    <div className="payment">
                        <div className="payment-text">
                            <p>We Using Safe Payment For:</p>
                        </div>
                        <div className="payment-cards">
                            <ul>
                                {
                                    PaymentData.map(item => (
                                        <li key={item.id}>
                                            <img src={item.img} alt="payment-card" />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;