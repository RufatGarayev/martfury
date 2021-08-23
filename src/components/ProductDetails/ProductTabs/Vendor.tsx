import React from 'react';
import { Link } from 'react-router-dom';

const Vendor: React.FC = () => {
    return (
        <div className="tabContent-vendor">
            <h5>GoPro</h5>
            <p>
                Digiworld US, New York’s no.1 online retailer was established in May 2012 with the aim and
                vision to become the one-stop shop for retail in New York with implementation of best practices both online
            </p>
            <Link to="#/">More Products from Gopro</Link>
        </div>
    )
};

export default Vendor;