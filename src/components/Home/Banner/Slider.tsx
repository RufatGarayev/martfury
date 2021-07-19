import React, { useState } from 'react';
import { SliderData } from './BannerData';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Slider: React.FC = () => {
    const [tabIndex, setTabIndex] = useState<number>(1);

    // handleRightBtnClick
    const handleRightBtnClick = (): void => {
        setTabIndex(tabIndex + 1);
        if (tabIndex >= 3) setTabIndex(1);
    }

    // handleLeftBtnClick
    const handleLeftBtnClick = (): void => {
        setTabIndex(tabIndex - 1);
        if (tabIndex <= 1) setTabIndex(3);
    }

    return (
        <div className="banner-slider">
            {/* ======= Slide item ======= */}
            {
                SliderData.map(item => (
                    <div key={item.id} className={item.id === tabIndex ? "slide-item" : "d-none"}>
                        <Link to="/shop">
                            <img src={item.img} alt="slide-img" />
                        </Link>
                    </div>
                ))
            }
            {/* ======= Slider buttons ======= */}
            <div className="slider-btns">
                <button onClick={handleLeftBtnClick} className="left-btn">
                    <VscChevronLeft />
                </button>
                <button onClick={handleRightBtnClick} className="right-btn">
                    <VscChevronRight />
                </button>
            </div>
        </div>
    )
}

export default Slider;