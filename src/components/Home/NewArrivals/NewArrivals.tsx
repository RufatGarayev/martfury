import React from 'react';
import SectionHeader from '../Other/SectionHeader';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';

interface IButtonsAndLink {
    id: number;
    href: string;
    title: string;
}

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
            <div className="container-fluid">
                {/* ======= Section header ======= */}
                <div className="section-header-wrapper">
                    <SectionHeader
                        title="Hot New Arrivals"
                        buttons={ButtonsAndLinkData}
                    />
                </div>
                {/* ======= Product item ======= */}
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
}

export default NewArrivals;