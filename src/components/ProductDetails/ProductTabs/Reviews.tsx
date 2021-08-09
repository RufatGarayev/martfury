import React from 'react';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Reviews: React.FC = () => {
    const [rows] = useState<number>(5);

    return (
        <div className="tabContent-reviews">
            <h6>SUBMIT YOUR REVIEW</h6>
            <p>Your email address will not be published. Required fields are marked*</p>
            {/* ===== rating ===== */}
            <div className="rating">
                <p>Your rating of this product</p>
                <div className="stars">
                    <span><AiFillStar /></span>
                    <span><AiOutlineStar /></span>
                    <span><AiOutlineStar /></span>
                    <span><AiOutlineStar /></span>
                    <span><AiOutlineStar /></span>
                </div>
            </div>
            {/* ===== review-area ===== */}
            <div className="review-area">
                <form>
                    <div className="textarea-wrapper">
                        <textarea
                            name="review"
                            placeholder="Write your review here"
                            rows={rows}
                        >
                        </textarea>
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="name" placeholder="Your Name" />
                    </div>
                    <div className="input-wrapper">
                        <input type="text" name="email" placeholder="Your Email" />
                    </div>
                    <div className="submit-review-btn">
                        <input type="submit" value="Submit Review" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reviews;