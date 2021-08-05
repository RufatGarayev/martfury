import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import ShopContent from '../components/Shop/ShopContent';

const Shop: React.FC = () => {
    return (
        <div className="shop-content">
            <div className="main">
                <Breadcrumb currentPage={"Shop"} />
                <ShopContent />
            </div>
        </div>
    )
}

export default Shop;