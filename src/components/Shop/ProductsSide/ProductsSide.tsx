import React, { useState } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import Pagination from './Pagination';
import { IProducts } from '../../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers/index';
import { SortByPriceAndLatest, IsLoading } from '../../../redux/actions/productActions';

const ProductsSide: React.FC = () => {
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;
    const title = productsState.title;
    const loading = productsState.isLoading;
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(12);
    const indexOfLastBook: number = currentPage * productsPerPage;
    const indexOfFirstBook: number = indexOfLastBook - productsPerPage;
    const currentProducts: IProducts[] = products.slice(indexOfFirstBook, indexOfLastBook);
    const totalPagesNum: number = Math.ceil(products.length / productsPerPage);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(SortByPriceAndLatest(e.target.value));
    }

    setTimeout(() => {
        dispatch(IsLoading(false));
    }, 3000);

    return (
        <div className="products-side">
            {
                title !== "" && (
                    <div className="title">
                        <h4>{title}</h4>
                    </div>
                )
            }
            {
                loading ? (
                    <small>Loading...</small>

                ) : products.length === 0 ? (
                    <small>No products found.</small>

                ) : (
                    <>
                        {/* ======= products-header ======= */}
                        <div className="products-header d-flex">
                            <div className="products-found d-flex align-items-center">
                                <span>{products.length}</span>
                                <p className="m-0">Products found</p>
                            </div>
                            <div className="sorting">
                                <label className="m-0">SORT BY:</label>
                                <select onChange={handleChange}>
                                    <option value="default">Default</option>
                                    <option value="latest">Latest</option>
                                    <option value="lowPrice">Price (Low to High)</option>
                                    <option value="highPrice">Price (High to Low)</option>
                                </select>
                            </div>
                        </div>
                        {/* ======= products ======= */}
                        <div className="products">
                            <div className="row">
                                {
                                    currentProducts.map(product => (
                                        <div key={product.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item">
                                                <ProductCard product={product} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* ======= pagination ======= */}
                        <Pagination
                            pages={totalPagesNum}
                            setCurrentPage={setCurrentPage}
                        />
                    </>
                )
            }
        </div>
    )
}

export default ProductsSide;