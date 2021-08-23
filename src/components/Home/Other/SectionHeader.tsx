import React from 'react';
import { Link } from 'react-router-dom';
import { ISectionHeaderProps } from '../../../types/types';

const SectionHeader: React.FC<ISectionHeaderProps> = ({ title }) => {
    return (
        <div className="section-header">
            <div className="left-side">
                <div className="section-title">
                    <h4>{title}</h4>
                </div>
            </div>
            <div className="right-side">
                <Link to="/shop">View All</Link>
            </div>
        </div>
    )
};

export default SectionHeader;