import React from 'react';
import CheckoutInfo from './CheckoutInfo';

const CheckoutContent: React.FC = () => {
    return (
        <section id="checkout">
            <div className="container">
                <CheckoutInfo />
            </div>
        </section>
    )
}

export default CheckoutContent;