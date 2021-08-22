import React, { useCallback, useEffect, useState, useRef } from 'react';

interface RangeSliderProps {
    min: number;
    max: number;
    onChange: Function;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    // convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }

    }, [minVal, getPercent]);

    // set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }

    }, [maxVal, getPercent]);

    // get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });

    }, [minVal, maxVal, onChange]);


    return (
        <div className="range-slider-area-wrapper">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                className="thumb thumb--left"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(Number(e.target.value), maxVal - 1);
                    setMinVal(value);
                    minValRef.current = value;
                }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                className="thumb thumb--right"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(Number(e.target.value), minVal + 1);
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
            />
            <div className="slider">
                <div className="slider__track"></div>
                <div ref={range} className="slider__range"></div>
            </div>
            <p className="mt-3">Price: ${minVal} - ${maxVal}</p>
        </div>
    )
}

export default RangeSlider;