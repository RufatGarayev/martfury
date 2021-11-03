import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';
import { IButtonsAndLink } from '../../../types/types';

const NewArrivals: React.FC = () => {
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;

    const ButtonsAndLinkData: IButtonsAndLink[] = [
        { id: 1, href: "#/", title: "Technologies" },
        { id: 2, href: "#/", title: "Electronic" },
        { id: 3, href: "#/", title: "Furnitures" },
        { id: 4, href: "#/", title: "Clothing & Apparel" },
        { id: 5, href: "#/", title: "Health & Beauty" },
        { id: 6, href: "/shop", title: "View All" }
    ];

    return (
        <section id="new-arrivals">
            <div className="container">
                <div className="section-header-wrapper">
                    <div className="section-header">
                        <div className="left-side">
                            <div className="section-title">
                                <h4>Hot New Arrivals</h4>
                            </div>
                        </div>
                        <div className="right-side">
                            <ul className="d-flex section-buttons-and-link">
                                {
                                    ButtonsAndLinkData.map(item => (
                                        <li key={item.id}>
                                            <Link to={item.href}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="product-item-wrapper">
                    <div className="row">
                        {
                            products.map(product => (
                                product.isNew === true && (
                                    <div key={product.id} className="col-lg-3">
                                        <ProductItem product={product} />
                                    </div>
                                )
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default NewArrivals;