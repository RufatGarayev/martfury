import { IProducts } from '../../data/products';

export enum ActionType {
    // cart action types
    ADD_TO_CART = "ADD_TO_CART",
    DELETE_FROM_CART = "DELETE_FROM_CART",
    INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT",
    DECREASE_PRODUCT_COUNT = "DECREASE_PRODUCT_COUNT",
    GET_TOTAL_PRICE = "GET_TOTAL_PRICE",
    MAKE_ISINCART_TRUE = "MAKE_ISINCART_TRUE",

    // product action types
    SORT_BY_LATEST_AND_PRICE = "SORT_PRODUCTS_BY_LATEST_AND_PRICE",
    SORT_BY_CATEGORY = "SORT_BY_CATEGORY",
    SORT_BY_BRAND = "SORT_BY_BRAND",
    SEARCH_PRODUCT = "SEARCH_PRODUCT",
    FILTER_BY_LOW_PRICE = "FILTER_BY_LOW_PRICE",
    FILTER_BY_HIGH_PRICE = "FILTER_BY_HIGH_PRICE",
    MAKE_ISINCART_FALSE = "MAKE_ISINCART_FALSE",
    MAKE_IS_IN_WISHLIST_FALSE = "MAKE_IS_IN_WISHLIST_FALSE",
    MAKE_IS_IN_COMPARE_FALSE = "MAKE_IS_IN_COMPARE_FALSE",
    GET_TITLE = "GET_TITLE",
    IS_LOADING = "IS_LOADING",

    // wishlist action types
    ADD_TO_WISHLIST = "ADD_TO_WISHLIST",
    MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST = "MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST",
    MAKE_WISHLIST_PRODUCT_ISINCART_FALSE = "MAKE_WISHLIST_PRODUCT_ISINCART_FALSE",
    REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST",

    // compare action types
    ADD_TO_COMPARE = "ADD_TO_COMPARE",
    REMOVE_FROM_COMPARE = "REMOVE_FROM_COMPARE",
    MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE = "MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE",
    MAKE_COMPARE_PRODUCT_ISINCART_FALSE = "MAKE_COMPARE_PRODUCT_ISINCART_FALSE"
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

interface MakeIsInCartTrueAction {
    type: ActionType.MAKE_ISINCART_TRUE;
    payload: number;
}


// interfaces for product actions
interface SortByLatestAndPrice {
    type: ActionType.SORT_BY_LATEST_AND_PRICE;
    payload: string;
}

interface SortByCategoryAction {
    type: ActionType.SORT_BY_CATEGORY,
    payload: string;
}

interface SortByBrandAction {
    type: ActionType.SORT_BY_BRAND,
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

interface MakeIsInCartFalseAction {
    type: ActionType.MAKE_ISINCART_FALSE;
    payload: number;
}

interface MakeIsInWishlistFalseAction {
    type: ActionType.MAKE_IS_IN_WISHLIST_FALSE;
    payload: number;
}

interface MakeIsInCompareFalseAction {
    type: ActionType.MAKE_IS_IN_COMPARE_FALSE;
    payload: number;
}

interface GetTitleAction {
    type: ActionType.GET_TITLE;
    payload: string;
}

interface IsLoadingAction {
    type: ActionType.IS_LOADING;
    payload: boolean;
}

// interfaces for wishlist actions
interface AddToWishlistAction {
    type: ActionType.ADD_TO_WISHLIST;
    payload: IProducts;
}

interface RemoveFromWishlistAction {
    type: ActionType.REMOVE_FROM_WISHLIST;
    payload: number;
}

interface MakeWishlistProductTrueInWishlistAction {
    type: ActionType.MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST;
    payload: number;
}

interface MakeWishlistProductIsInCartFalseAction {
    type: ActionType.MAKE_WISHLIST_PRODUCT_ISINCART_FALSE;
    payload: number;
}

// interfaces for compare actions
interface AddToCompareAction {
    type: ActionType.ADD_TO_COMPARE;
    payload: IProducts;
}

interface RemoveFromCompareAction {
    type: ActionType.REMOVE_FROM_COMPARE;
    payload: number;
}

interface MakeCompareProductTrueInCompareAction {
    type: ActionType.MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE;
    payload: number;
}

interface MakeCompareProductIsInCartFalseAction {
    type: ActionType.MAKE_COMPARE_PRODUCT_ISINCART_FALSE;
    payload: number;
}


export type CartAction = AddToCartAction | DeleteFromCartAction | IncreaseAction |
    DecreaseAction | MakeIsInCartTrueAction;

export type ProductAction = SortByLatestAndPrice | SortByCategoryAction | SearchAction | FilterByLowPriceAction |
    FilterByHighPriceAction | MakeIsInCartFalseAction | MakeIsInWishlistFalseAction | MakeIsInCompareFalseAction | 
    GetTitleAction | IsLoadingAction | SortByBrandAction;

export type WishlistAction = AddToWishlistAction | RemoveFromWishlistAction |
    MakeWishlistProductTrueInWishlistAction | MakeWishlistProductIsInCartFalseAction;
    
export type CompareAction = AddToCompareAction | RemoveFromCompareAction |
    MakeCompareProductTrueInCompareAction | MakeCompareProductIsInCartFalseAction;