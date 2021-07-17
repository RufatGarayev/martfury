import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Department: React.FC = () => {
    return (
        <div className="department d-flex">
            <div className="icon">
                <span><GiHamburgerMenu /></span>
            </div>
            <div className="text">
                <h6>Shop by Department</h6>
            </div>
        </div>
    )
}

export default Department;