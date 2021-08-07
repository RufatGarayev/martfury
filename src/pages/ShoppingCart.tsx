import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import CartSection from '../components/ShoppingCart/CartSection';

const ShoppingCart: React.FC = () => {
    return (
        <div className="cart-content">
            <div className="main">
                <Breadcrumb currentPage={"Shopping Cart"} />
                <CartSection />
            </div>
        </div>
    )
}

export default ShoppingCart;