import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchProduct } from '../../../redux/actions/productActions';
import { RootState } from '../../../redux/reducers/index';

const Search: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
    const [showCloseBtn, setShowCloseBtn] = useState<boolean>(false);
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SearchProduct(e.target.value));
        setSearchValue(e.target.value);
        setShowSearchResult(true);
        setShowCloseBtn(true);
    };

    const handleCloseBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowSearchResult(false);
        setSearchValue("");
        setShowCloseBtn(false);
    };

    return (
        <div className="search">
            {/* ======= search-form ======= */}
            <form className="d-flex">
                <input
                    type="text"
                    value={searchValue}
                    placeholder="I'm shopping for..."
                    onChange={handleChange}
                />
                <input type="submit" value="Search" />
                <button
                    type="button"
                    className={showCloseBtn ? "close-btn" : "d-none"}
                    onClick={handleCloseBtnClick}
                >
                    ✕
                </button>
            </form>
            {/* ======= search-result ======= */}
            <div className={showSearchResult ? "search-result" : "d-none"}>
                {
                    products.map(product => (
                        <div key={product.id} className="product-item d-flex">
                            <div className="img">
                                <img src={product.img} alt={product.title} />
                            </div>
                            <div className="info">
                                <h6>{product.title}</h6>
                                <span>{product.rating}</span>
                                <p className="d-flex">
                                    <span>$</span>{product.price}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search;