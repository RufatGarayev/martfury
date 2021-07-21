import React from 'react';
import { Link } from 'react-router-dom';
import { SocialMediaData } from './FooterTopData';

const ContactUs: React.FC = () => {
    return (
        <div className="contact-us">
            {/* ======= Title ======= */}
            <div className="contact-us-title">
                <h6>Contact us</h6>
            </div>
            <div className="contact-us-content">
                {/* ======= Content - text ======= */}
                <div className="text">
                    <p>Call us 24/7</p>
                    <h3>1800 97 97 69</h3>
                    <p>
                        502 New Design Str, Melbourne, Australia
                        <br />
                        <Link to="#/">contact@martfury.co</Link>
                    </p>
                </div>
                {/* ======= Content - social media ======= */}
                <div className="social-media">
                    <ul>
                        {
                            SocialMediaData.map(item => (
                                <li key={item.id}>
                                    <Link to={item.href} className={item.class}>
                                        {item.icon}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;