import { IProducts } from '../../data/products';

export enum ActionType {
    // cart action types
    ADD_TO_CART = "ADD_TO_CART",
    DELETE_FROM_CART = "DELETE_FROM_CART",
    INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT",
    DECREASE_PRODUCT_COUNT = "DECREASE_PRODUCT_COUNT",
    GET_TOTAL_PRICE = "GET_TOTAL_PRICE",

    // product action types
    SORT_BY_LATEST_AND_PRICE = "SORT_PRODUCTS_BY_LATEST_AND_PRICE",
    SEARCH_PRODUCT = "SEARCH_PRODUCT",
    FILTER_BY_LOW_PRICE = "FILTER_BY_LOW_PRICE",
    FILTER_BY_HIGH_PRICE = "FILTER_BY_HIGH_PRICE"
}


// interfaces for cart actions
interface AddToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: IProducts;
}

interface DeleteFromCartAction {
    type: ActionType.DELETE_FROM_CART;
    payload: number;
}

interface IncreaseAction {
    type: ActionType.INCREASE_PRODUCT_COUNT;
    payload: number;
}

interface DecreaseAction {
    type: ActionType.DECREASE_PRODUCT_COUNT;
    payload: number;
}

// interfaces for product actions
interface SortByLatestAndPrice {
    type: ActionType.SORT_BY_LATEST_AND_PRICE;
    payload: string;
}

interface SearchAction {
    type: ActionType.SEARCH_PRODUCT;
    payload: string;
}

interface FilterByLowPriceAction {
    type: ActionType.FILTER_BY_LOW_PRICE;
    payload: number;
}

interface FilterByHighPriceAction {
    type: ActionType.FILTER_BY_HIGH_PRICE;
    payload: number;
}


export type CartAction = AddToCartAction | DeleteFromCartAction | IncreaseAction | DecreaseAction;
export type ProductAction = SortByLatestAndPrice | SearchAction | FilterByLowPriceAction | FilterByHighPriceAction;