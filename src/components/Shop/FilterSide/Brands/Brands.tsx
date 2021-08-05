import React from 'react';
import { BrandsData } from './BrandsData';

const Brands: React.FC = () => {
    return (
        <div className="brands">
            {/* ======= title ======= */}
            <div className="brands-title">
                <h5>BY BRANDS</h5>
            </div>
            {/* ======= brands-list ======= */}
            <div className="brands-list">
                <ul>
                    {
                        BrandsData.map(brand => (
                            <li key={brand.id}>
                                <input type="checkbox" name={brand.title} id={brand.value} />
                                <label htmlFor={brand.value}>{brand.title}</label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Brands;