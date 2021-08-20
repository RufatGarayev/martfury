import React from 'react';
import RangeSlider from './RangeSlider';

const PriceSlider: React.FC = () => {
    return (
        <div className="range-slider">
            <div className="price-filter-title">
                <h5>BY PRICE</h5>
            </div>
            <div className="range-slider-area">
                <RangeSlider
                    min={0}
                    max={1400}
                    onChange={({ min, max }: { min: number; max: number }) => {
                        console.log(`min = ${min}, max = ${max}`);
                    }}
                />
            </div>
        </div>
    )
}

export default PriceSlider;