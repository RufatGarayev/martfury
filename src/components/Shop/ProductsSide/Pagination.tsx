import React, { useState, useEffect } from 'react';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';
import { IPaginationProps } from '../../../types/types';

const Pagination: React.FC<IPaginationProps> = ({ pages, setCurrentPage }) => {
    const [currentButton, setCurrentButton] = useState<number>(1);
    const numOfPages = [];

    // getting number of the pages
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    };

    // changing current page when click the button
    useEffect(() => {
        setCurrentPage(currentButton);
        window.scrollTo(0, 0);
    }, [currentButton, setCurrentPage]);

    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination">
                <li className={currentButton === 1 ? "page-item disabled" : "page-item"}>
                    <button
                        className="page-link"
                        onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                    >
                        <VscChevronLeft />
                    </button>
                </li>
                {
                    numOfPages.map((page, index) => (
                        <li key={index} className={currentButton === page ? "page-item active" : "page-item"}>
                            <button
                                className="page-link"
                                onClick={() => setCurrentButton(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))
                }
                <li className={currentButton === numOfPages.length ? "page-item disabled" : "page-item"}>
                    <button
                        className="page-link"
                        onClick={() => setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1)}
                    >
                        <VscChevronRight />
                    </button>
                </li>
            </ul>
        </nav>
    )
};

export default Pagination;