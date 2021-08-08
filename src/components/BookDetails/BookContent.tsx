import React from 'react';
import ImgSlider from './ImgSlider';
import BookInfo from './BookInfo';

const BookContent: React.FC = () => {
    return (
        <section id="book-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ImgSlider />
                    </div>
                    <div className="col-lg-6">
                        <BookInfo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookContent;