import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import CompareSection from '../components/Compare/CompareSection';

const Compare: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="compare-content">
            <div className="main">
                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>Compare</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                <CompareSection />
            </div>
        </div>
    )
};

export default Compare;