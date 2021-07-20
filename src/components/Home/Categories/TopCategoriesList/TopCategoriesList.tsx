import React from 'react';
import { Link } from 'react-router-dom';
import { TopCategoriesData } from './TopCategoriesData';

const TopCategoriesList: React.FC = () => {
    return (
        <div className="top-categories-list">
            <div className="row">
                <div className="col-12">
                    {/* ======= Title ======= */}
                    <div className="section-title">
                        <h4>Top Categories Of The Month</h4>
                    </div>
                </div>
            </div>
            {/* ======= Categories ======= */}
            <div className="categories-wrapper">
                <div className="row">
                    {
                        TopCategoriesData.map(item => (
                            <div key={item.id} className="col-lg-2 col-md-4">
                                <Link to="/shop">
                                    <div className="category-item">
                                        <div className="category-img">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <div className="category-title">
                                            <h6>{item.title}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopCategoriesList;