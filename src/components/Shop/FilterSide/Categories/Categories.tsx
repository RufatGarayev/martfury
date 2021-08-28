import React from 'react';
import { CategoriesData } from '../../../Other/CategoriesData';
import { useDispatch } from 'react-redux';
import { SortByCategory } from '../../../../redux/actions/productActions';
import { GetTitle, IsLoading, ShowSidebarFilter } from '../../../../redux/actions/primaryActions';

const Categories: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="categories">
            <button
                type="button"
                className="close-filter"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    dispatch(ShowSidebarFilter(false));
                }}
            >
                ✕
            </button>
            <div className="categories-title">
                <h5>CATEGORIES</h5>
            </div>
            <div className="categories-list">
                <ul>
                    {
                        CategoriesData.map(category => (
                            <li
                                key={category.id}
                                onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                                    dispatch(GetTitle(category.title));
                                    dispatch(SortByCategory(category.title));
                                    dispatch(IsLoading(true));
                                }}
                            >
                                <a href="#/">{category.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};

export default Categories;