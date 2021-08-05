import React from 'react';
import Categories from './Categories/Categories';
import Brands from './Brands/Brands';
import PriceSlider from './PriceSlider/PriceSlider';

const FilterSide: React.FC = () => {
    return (
        <div className="filter-side">
            <Categories />
            <Brands />
            <PriceSlider />
        </div>
    )
}

export default FilterSide;