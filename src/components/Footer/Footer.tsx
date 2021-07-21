import React from 'react';
import FooterTop from './FooterTop/FooterTop';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="footer-top-wrapper">
                    <FooterTop/>
                </div>
                <div className="footer-middle-wrapper"></div>
                <div className="footer-bottom-wrapper"></div>
            </div>
        </div>
    )
}

export default Footer;