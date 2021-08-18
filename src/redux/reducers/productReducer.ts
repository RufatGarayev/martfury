import { IProducts, products } from '../../data/products';
import { ProductAction, ActionType } from '../actions/actionTypes';

interface IState {
    products: IProducts[];
    searchedProducts: IProducts[];
}

const initialState = {
    products: products,
    searchedProducts: []
}

const productReducer = (state: IState = initialState, action: ProductAction) => {
    switch (action.type) {
        // sorting products by latest and price
        case ActionType.SORT_BY_LATEST_AND_PRICE:
            const sortedProducts = state.products.slice();

            if (action.payload === "latest") {
                sortedProducts.sort((a, b) => (a.id < b.id ? 1 : -1));
            } else if (action.payload === "lowPrice") {
                sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
            } else if (action.payload === "highPrice") {
                sortedProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
            } else {
                sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
            }

            return {
                ...state,
                products: sortedProducts
            }

        // search product 
        case ActionType.SEARCH_PRODUCT:
            let filteredProducts = initialState.products.filter(product => (
                product.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
            ))

            return {
                ...initialState,
                searchedProducts: filteredProducts
            }

        // filter by low price
        case ActionType.FILTER_BY_LOW_PRICE:
            return {
                ...initialState,
                products: initialState.products.filter(product => (
                    product.price >= action.payload && product
                ))
            }

        // filter by high price
        case ActionType.FILTER_BY_HIGH_PRICE:
            return {
                ...initialState,
                products: initialState.products.filter(product => (
                    product.price <= action.payload && product 
                ))
            }

        default:
            return state;
    }
};

export default productReducer;