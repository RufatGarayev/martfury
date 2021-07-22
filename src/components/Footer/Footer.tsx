import React from 'react';
import FooterTop from './FooterTop/FooterTop';
import FooterMiddle from './FooterMiddle/FooterMiddle';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="footer-top-wrapper">
                    <FooterTop />
                </div>
                <div className="footer-middle-wrapper">
                    <FooterMiddle />
                </div>
                <div className="footer-bottom-wrapper">
                    <FooterBottom />
                </div>
            </div>
        </div>
    )
}

export default Footer;