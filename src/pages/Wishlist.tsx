import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import WishlistSection from '../components/Wishlist/WishlistSection';

const Wishlist: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-content">
            <div className="main">
                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>Wishlist</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                <WishlistSection />
            </div>
        </div>
    )
};

export default Wishlist;