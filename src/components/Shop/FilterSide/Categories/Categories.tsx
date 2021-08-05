import React from 'react';
import {CategoriesData} from '../../../Other/CategoriesData';

const Categories: React.FC = () => {
    return (
        <div className="categories">
            {/* ======= title ======= */}
            <div className="categories-title">
                <h5>CATEGORIES</h5>
            </div>
            {/* ======= categories-list ======= */}
            <div className="categories-list">
                <ul>
                    {
                        CategoriesData.map(category => (
                            <li key={category.id}>
                                <a href="#/">{category.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Categories;