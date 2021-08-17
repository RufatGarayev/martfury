import { products } from '../../data/products';
import { ProductAction, ActionType } from '../actions/actionTypes';

const initialState = {
    products: products,
    showNoProductsAlert: false
}

const productReducer = (state = initialState, action: ProductAction) => {
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
            return {
                ...initialState,
                products: initialState.products.filter(product => (
                    product.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
                ))
            }

        default:
            return state;
    }
};

export default productReducer;