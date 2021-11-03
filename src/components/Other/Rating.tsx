import React from "react";
import { IRatingProps } from "../../types/types";
// import { v4 as uuidv4 } from "uuid";

const Rating: React.FC<IRatingProps> = ({ value, color }) => {
    return (
        <div className="rating d-flex justify-content-between">
            {[1, 2, 3, 4, 5].map((rate) => (
                <span key={Math.random() * 100}>
                    <i
                        style={{ color }}
                        className={
                            value + 1 === rate + 0.5 ? "fas fa-star-half-alt" : value >= rate ? "fas fa-star" : "far fa-star"
                        }
                    ></i>
                </span>
            ))}
        </div>
    );
};

Rating.defaultProps = {
    color: "#FFA41C",
};

export default Rating;