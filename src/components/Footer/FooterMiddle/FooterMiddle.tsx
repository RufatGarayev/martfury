import React from 'react';
import { Link } from 'react-router-dom';
import { LinksData } from './FooterMiddleData';

const FooterMiddle: React.FC = () => {
    return (
        <div className="footer-middle">
            <div className="footer-middle-links">
                <ul>
                    {
                        LinksData.map(item => (
                            <li key={item.id} className="d-flex">
                                <div className="title">
                                    <h6>{item.title}:</h6>
                                </div>
                                <div className="links">
                                    <ul>
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
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FooterMiddle;