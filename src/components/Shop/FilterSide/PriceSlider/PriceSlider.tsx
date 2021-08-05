import React from 'react';
import { RangeSlider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const PriceSlider: React.FC = () => {
    return (
        <div className="range-slider">
            {/* ======= title ======= */}
            <div className="price-filter-title">
                <h5>BY PRICE</h5>
            </div>
            {/* ======= range slider area ======= */}
            <div className="range-slider-area">
                <RangeSlider
                    min={0} 
                    max={2000}
                    defaultValue={[0, 2000]}
                />
                <p className="mt-3">Price: $0 - $2000</p>
            </div>
        </div>
    )
}

export default PriceSlider;