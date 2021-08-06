import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import Map from '../components/Contact/Map/Map';
import ContactItems from '../components/Contact/ContactItems/ContactItems';
import GetInTouch from '../components/Contact/GetInTouch/GetInTouch';

const Contact: React.FC = () => {
    return (
        <div className="contact-content">
            <div className="main">
                <Breadcrumb currentPage={"Contact"} />
                <Map />
                <ContactItems />
                <GetInTouch />
            </div>
        </div>
    )
}

export default Contact;