import React from 'react';
import WesterUnionImg from '../../../assets/img/payment/western-union.png';
import CirrusImg from '../../../assets/img/payment/cirrus.png';
import MasterCardImg from '../../../assets/img/payment/master-card.png';
import SkrillImg from '../../../assets/img/payment/skrill.png';
import VisaImg from '../../../assets/img/payment/visa.png';
import { IPayment } from '../../../types/types';

const FooterBottom: React.FC = () => {
    const PaymentData: IPayment[] = [
        { id: 1, img: WesterUnionImg },
        { id: 2, img: CirrusImg },
        { id: 3, img: MasterCardImg },
        { id: 4, img: SkrillImg },
        { id: 5, img: VisaImg }
    ];

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