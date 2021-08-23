import React from 'react';
import ContactUs from './ContactUs';
import { LinksData } from './FooterTopData';
import { Link } from 'react-router-dom';

const FooterTop: React.FC = () => {
    return (
        <div className="footer-top">
            <div className="row">
                <div className="col-lg-5">
                    {/* ======= Contact us ======= */}
                    <div className="contact-us-wrapper">
                        <ContactUs />
                    </div>
                </div>
                <div className="col-lg-7">
                    {/* ======= Links ======= */}
                    <div className="links-wrapper">
                        <div className="row">
                            {
                                LinksData.map(item => (
                                    <div key={item.id} className="col-lg-4">
                                        <div className="links-item">
                                            <div className="title">
                                                <h6>{item.title}</h6>
                                            </div>
                                            <ul className="links m-0">
                                                {
                                                    item.links.map(linkItem => (
                                                        <li key={linkItem.id}>
                                                            <Link to={linkItem.href}>
                                                                {linkItem.title}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterTop;