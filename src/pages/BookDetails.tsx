import React from 'react';
import Breadcrumb from '../components/Other/Breadcrumb';
import BookContent from '../components/BookDetails/BookContent';

const BookDetails: React.FC = () => {
    return (
        <div className="book-details-content">
            <div className="main">
                <Breadcrumb currentPage={"Book Details"} />
                <BookContent />
            </div>
        </div>
    )
}

export default BookDetails;