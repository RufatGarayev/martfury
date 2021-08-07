import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import WishlistSection from '../components/Wishlist/WishlistSection';

const Wishlist: React.FC = () => {
    return (
        <div className="about-content">
            <div className="main">
                <Breadcrumb currentPage={"Wishlist"} />
                <WishlistSection />
            </div>
        </div>
    )
}

export default Wishlist;