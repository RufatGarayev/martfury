import React from 'react';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';

const Pagination: React.FC = () => {
    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link arrow">
                        <VscChevronLeft />
                    </button>
                </li>
                <li className="page-item">
                    <button className="page-link">1</button>
                </li>
                <li className="page-item">
                    <button className="page-link">2</button>
                </li>
                <li className="page-item">
                    <button className="page-link">3</button>
                </li>
                <li className="page-item">
                    <button className="page-link arrow">
                        <VscChevronRight />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;