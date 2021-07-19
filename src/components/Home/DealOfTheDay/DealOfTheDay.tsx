import React from 'react';
import SectionHeader from './SectionHeader';
import DealOfTheDaySlider from './DealOfTheDaySlider';

const DealOfTheDay: React.FC = () => {
    return (
        <section id="deal-of-the-day">
            <div className="container-fluid">
                {/* ======= Section header ======= */}
                <div className="section-header-wrapper">
                    <SectionHeader />
                </div>
                {/* ======= Slider ======= */}
                <div className="slider-wrapper">
                    <DealOfTheDaySlider />
                </div>
            </div>
        </section>
    )
}

export default DealOfTheDay;