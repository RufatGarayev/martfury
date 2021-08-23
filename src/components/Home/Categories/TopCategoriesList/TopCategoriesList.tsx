import React from 'react';
import { Link } from 'react-router-dom';
import ClothingsImg from '../../../../assets/img/categories/clothings.jpg';
import ComputersImg from '../../../../assets/img/categories/computers.jpg';
import HomeAndKitchenImg from '../../../../assets/img/categories/home-and-kitchen.jpg';
import HealthAndBeautyImg from '../../../../assets/img/categories/health-and-beauty.jpg';
import JewelryAndWatchImg from '../../../../assets/img/categories/jewelry-and-watch.jpg';
import PhonesImg from '../../../../assets/img/categories/phones.jpg';
import { ITopCategoriesData } from '../../../../types/types';

const TopCategoriesList: React.FC = () => {
    const TopCategoriesData: ITopCategoriesData[] = [
        { id: 1, title: "Clothings", img: ClothingsImg },
        { id: 2, title: "Computers", img: ComputersImg },
        { id: 3, title: "Home & Kitchen", img: HomeAndKitchenImg },
        { id: 4, title: "Health & Beauty", img: HealthAndBeautyImg },
        { id: 5, title: "Jewelry & Watch", img: JewelryAndWatchImg },
        { id: 6, title: "Phones", img: PhonesImg }
    ];

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
};

export default TopCategoriesList;