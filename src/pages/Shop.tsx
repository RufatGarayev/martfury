import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IsLoading } from '../redux/actions/productActions';
import Breadcrumb from '../components/Other/Breadcrumb';
import BrandsSection from '../components/Shop/Brands/Brands';
import Categories from '../components/Shop/FilterSide/Categories/Categories';
import Brands from '../components/Shop/FilterSide/Brands/Brands';
import PriceSlider from '../components/Shop/FilterSide/PriceFilter/PriceFilter';
import ProductsSide from '../components/Shop/ProductsSide/ProductsSide';
import { RootState } from '../redux/reducers/index';

const Shop: React.FC = () => {
    const productState = useSelector((state: RootState) => state.products);
    const loading = productState.isLoading;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(IsLoading(true));
        window.scrollTo(0, 0);

        setTimeout(() => {
            dispatch(IsLoading(false));
        }, 500);
    }, []);

    return (
        <div className="shop-content">
            <div className="main">
                <Breadcrumb currentPage={"Shop"} />

                {/* ======= shop-content ======= */}
                <div className="shop-content-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <BrandsSection />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="filter-side">
                                    <Categories />
                                    <Brands />
                                    <PriceSlider />
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
            </div>
        </div>
    )
}

export default Shop;