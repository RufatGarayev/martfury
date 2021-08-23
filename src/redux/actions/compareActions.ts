import { ActionType } from "./actionTypes";
import { IProducts } from "../../types/types";


export const AddToCompare = (product: IProducts) => {
    return {
        type: ActionType.ADD_TO_COMPARE, payload: product
    }
};

export const MakeIsInCompareTrueInCompare = (id: number) => {
    return {
        type: ActionType.MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE, payload: id
    }
};

export const CompareProductIsInCartFalse = (id: number) => {
    return {
        type: ActionType.MAKE_COMPARE_PRODUCT_ISINCART_FALSE, payload: id
    }
};

export const RemoveFromCompare = (id: number) => {
    return {
        type: ActionType.REMOVE_FROM_COMPARE, payload: id
    }
};