import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IsLoading, ShowSidebarFilter } from '../redux/actions/primaryActions';
import { Link } from "react-router-dom";
import BrandsSection from '../components/Shop/Brands/Brands';
import Categories from '../components/Shop/FilterSide/Categories/Categories';
import Brands from '../components/Shop/FilterSide/Brands/Brands';
import ProductsSide from '../components/Shop/ProductsSide/ProductsSide';
import { RootState } from '../redux/reducers/index';

const Shop: React.FC = () => {
    const primaryState = useSelector((state: RootState) => state.primary);
    const loading = primaryState.isLoading;
    const showSideFilter = primaryState.showSidebarFilter;
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(IsLoading(true));

        setTimeout(() => {
            dispatch(IsLoading(false));
        }, 500);
    }, [dispatch]);

    return (
        <div className="shop-content">
            <div className="main">
                {/* ===== breadcrumb ===== */}
                <section id="breadcrumb">
                    <div className="container">
                        <ul className="breadcrumb-content d-flex m-0 p-0">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <span>Shop</span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ===== content ===== */}
                <div className="shop-content-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <BrandsSection />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className={showSideFilter ? "filter-side show-filter" : "filter-side"}>
                                    <Categories />
                                    <Brands />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                {
                                    loading ? (
                                        <small>Loading...</small>
                                    ) : (
                                        <ProductsSide />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===== dark bg-color ===== */}
                <div
                    className={showSideFilter ? "dark-bg-color" : "d-none"}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        dispatch(ShowSidebarFilter(false));
                    }}
                ></div>
            </div>
        </div>
    )
};

export default Shop;