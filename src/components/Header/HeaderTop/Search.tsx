import React, { useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { useSelector, useDispatch } from 'react-redux';
import { SearchProduct } from '../../../redux/actions/productActions';
import { RootState } from '../../../redux/reducers/index';
import { Link } from 'react-router-dom';

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
    const [showCloseBtn, setShowCloseBtn] = useState<boolean>(false);
    const [showSpinner, setShowSpinner] = useState<boolean>(false);
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.searchedProducts;
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowSpinner(true);
        dispatch(SearchProduct(e.target.value));
        setShowSearchResult(false);
        setShowCloseBtn(false);
        setSearchValue(e.target.value);

        setTimeout(() => {
            setShowSpinner(false);
            setShowSearchResult(true);
            setShowCloseBtn(true);

        }, 1000);
    };

    const handleCloseBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowSearchResult(false);
        setSearchValue("");
        setShowCloseBtn(false);
    };

    return (
        <div className="search">
            {/* ======= search-form ======= */}
            <form className="d-flex" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
                <input
                    type="text"
                    value={searchValue}
                    placeholder="I'm shopping for..."
                    onChange={handleChange}
                />
                <button type="submit">
                    <p>Search</p>
                    <span className="search-iconn"><CgSearch /></span>
                </button>
                <button
                    type="button"
                    className={showCloseBtn ? "close-btn" : "d-none"}
                    onClick={handleCloseBtnClick}
                >
                    ✕
                </button>
                <div className={showSpinner ? "lds-dual-ring" : "d-none"}></div>
            </form>
            {/* ======= search-result ======= */}
            <div className={showSearchResult ? "search-result-wrapper" : "d-none"}>
                {
                    products.length > 0 ? (
                        <div className="search-result">
                            {
                                products.map((product) => (
                                    <div key={product.id} className="product-item d-flex">
                                        <div className="img">
                                            <img src={product.img} alt={product.title} />
                                        </div>
                                        <div className="info">
                                            <Link
                                                to={`/product-details/${product?.id}`}
                                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                    setShowSearchResult(false);
                                                    setShowCloseBtn(false);
                                                }}
                                            >
                                                <h6>{product.title}</h6>
                                            </Link>
                                            <span className="rating">{product.rating}</span>
                                            <p className="d-flex">
                                                <span>$</span>{product.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <p className="my-2">No product found.</p>
                    )
                }
            </div>
        </div>
    )
};

export default Search;