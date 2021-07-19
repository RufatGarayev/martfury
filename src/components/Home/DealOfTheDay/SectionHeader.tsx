import React from 'react';
import Countdown from './Countdown';
import { Link } from 'react-router-dom';

const SectionHeader: React.FC = () => {
    return (
        <div className="section-header">
            <div className="left-side d-flex">
                {/* ======= Title ======= */}
                <div className="title">
                    <h4>Deal of the day</h4>
                </div>
                {/* ======= Countdown ======= */}
                <div className="countdown-wrapper">
                    <Countdown />
                </div>
            </div>
            <div className="right-side">
                {/* ======= View all link ======= */}
                <div className="view-all">
                    <Link to="/shop">View All</Link>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader;