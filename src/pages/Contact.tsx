import React from 'react';
import { Link } from "react-router-dom";
import Map from '../components/Contact/Map/Map';
import ContactItems from '../components/Contact/ContactItems/ContactItems';
import GetInTouch from '../components/Contact/GetInTouch/GetInTouch';

const Contact: React.FC = () => {
    return (
        <div className="contact-content">
            <div className="main">
                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>Contact</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                <Map />
                <ContactItems />
                <GetInTouch />
            </div>
        </div>
    )
}

export default Contact;