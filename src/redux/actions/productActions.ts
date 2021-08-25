import { ActionType } from "./actionTypes";


export const SortByPriceAndLatest = (selectValue: string) => {
    return {
        type: ActionType.SORT_BY_LATEST_AND_PRICE, payload: selectValue
    }
};

export const SortByCategory = (title: string) => {
    return {
        type: ActionType.SORT_BY_CATEGORY, payload: title
    }
};

export const SortByBrand = (title: string) => {
    return {
        type: ActionType.SORT_BY_BRAND, payload: title
    }
};

export const SearchProduct = (searchValue: string) => {
    return {
        type: ActionType.SEARCH_PRODUCT, payload: searchValue
    }
};

export const MakeIsInCartFalse = (id: number) => {
    return {
        type: ActionType.MAKE_ISINCART_FALSE, payload: id
    }
};

export const MakeIsInWishlistFalse = (id: number) => {
    return {
        type: ActionType.MAKE_IS_IN_WISHLIST_FALSE, payload: id
    }
};

export const MakeIsInCompareFalse = (id: number) => {
    return {
        type: ActionType.MAKE_IS_IN_COMPARE_FALSE, payload: id
    }
};