import { IProducts, products } from '../../data/products';
import { ProductAction, ActionType } from '../actions/actionTypes';

interface IState {
    products: IProducts[];
    searchedProducts: IProducts[];
    isLoading: boolean;
    title: string;
}

const initialState = {
    products: products,
    searchedProducts: [],
    isLoading: false,
    title: ""
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

        // sorting products by category 
        case ActionType.SORT_BY_CATEGORY:
            const sortByCategory = initialState.products.filter((product) => 
            product.category.indexOf(action.payload) !== -1)

            return {
                ...initialState,
                products: sortByCategory
            }

        // sorting products by brand 
        case ActionType.SORT_BY_BRAND:
            const sortByBrand = initialState.products.filter((product) => 
            product.brand.indexOf(action.payload) !== -1)

            return {
                ...initialState,
                products: sortByBrand
            }

        // change isLoading value
        case ActionType.IS_LOADING:
            return {
                ...state, 
                isLoading: state.isLoading = action.payload
            } 

        // get title
        case ActionType.GET_TITLE:
            return {
                ...initialState,
                title: initialState.title = action.payload
            }

        // making isInCart False
        case ActionType.MAKE_ISINCART_FALSE:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload ?
                    { ...product, isInCart: product.isInCart = false } : product)
            }

        // making isInWishlist False
        case ActionType.MAKE_IS_IN_WISHLIST_FALSE:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload ?
                    { ...product, isInWishlist: product.isInWishlist = false } : product)
            };

        // making isInCompare False
        case ActionType.MAKE_IS_IN_COMPARE_FALSE:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload ?
                    { ...product, isInCompare: product.isInCompare = false } : product)
            };

        // search product 
        case ActionType.SEARCH_PRODUCT:
            let filteredProducts = initialState.products.filter(product => (
                product.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1
            ))

            return {
                ...initialState,
                searchedProducts: filteredProducts
            }

        default:
            return state;
    }
};

export default productReducer;