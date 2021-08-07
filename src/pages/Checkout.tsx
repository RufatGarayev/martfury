import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import CheckoutContent from '../components/Checkout/CheckoutContent';

const Checkout: React.FC = () => {
    return (
        <div className="checkout-content">
            <div className="main">
                <Breadcrumb currentPage={"Checkout"} />
                <CheckoutContent />
            </div>
        </div>
    )
}

export default Checkout;