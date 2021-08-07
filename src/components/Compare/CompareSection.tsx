import React from 'react';
import CompareSlider from './CompareSlider';

const CompareSection: React.FC = () => {
    return (
        <section id="compare">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* ======= title ======= */}
                        <div className="title text-center">
                            <h1>Compare Product</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* ======= compare-slider ======= */}
                        <div className="compare-slider-wrapper">
                            <CompareSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompareSection;