import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import CompareSection from '../components/Compare/CompareSection';

const Compare: React.FC = () => {
    return (
        <div className="about-content">
            <div className="main">
                <Breadcrumb currentPage={"Compare"} />
                <CompareSection />
            </div>
        </div>
    )
}

export default Compare;