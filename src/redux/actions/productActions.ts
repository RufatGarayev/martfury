import { ActionType } from "./actionTypes";


// sorting products by price and latest
export const SortByPriceAndLatest = (selectValue: string) => {
    return {
        type: ActionType.SORT_BY_LATEST_AND_PRICE, payload: selectValue
    }
};

// search product
export const SearchProduct = (searchValue: string) => {
    return {
        type: ActionType.SEARCH_PRODUCT, payload: searchValue
    }
};

// filter by low price
export const FilterByLowPrice = (rangeInputVal: number) => {
    return {
        type: ActionType.FILTER_BY_LOW_PRICE, payload: rangeInputVal
    }
};

// filter by high price
export const FilterByHighPrice = (rangeInputVal: number) => {
    return {
        type: ActionType.FILTER_BY_HIGH_PRICE, payload: rangeInputVal
    }
};

// making isInCart False
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