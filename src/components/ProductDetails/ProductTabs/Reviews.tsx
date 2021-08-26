import React from 'react';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Reviews: React.FC = () => {
    const [rows] = useState<number>(7);

    return (
        <div className="tabContent-reviews">
            <h6>SUBMIT YOUR REVIEW</h6>
            <p>Your email address will not be published. Required fields are marked *</p>
            <div className="rating">
                <p>Your rating of this product</p>
                <div className="stars">
                    <input type="radio" name="rate" id="rate-5" />
                    <label htmlFor="rate-5" className="fifth-star"><AiFillStar /></label>
                    <input type="radio" name="rate" id="rate-4" />
                    <label htmlFor="rate-4" className="fourth-star"><AiFillStar /></label>
                    <input type="radio" name="rate" id="rate-3" />
                    <label htmlFor="rate-3" className="third-star"><AiFillStar /></label>
                    <input type="radio" name="rate" id="rate-2" />
                    <label htmlFor="rate-2" className="second-star"><AiFillStar /></label>
                    <input type="radio" name="rate" id="rate-1" />
                    <label htmlFor="rate-1" className="first-star"><AiFillStar /></label>
                </div>
            </div>
            <div className="review-area">
                <form>
                    <div className="row">
                        <div className="col-12">
                            <div className="textarea-wrapper">
                                <textarea
                                    name="review"
                                    className="w-100"
                                    placeholder="Write your review here"
                                    rows={rows}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-wrapper input-wrapper-name">
                                <input
                                    type="text"
                                    name="name"
                                    className="w-100"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    name="email"
                                    className="w-100"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="submit-review-btn">
                                <input type="submit" value="Submit Review" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Reviews;