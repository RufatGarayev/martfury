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