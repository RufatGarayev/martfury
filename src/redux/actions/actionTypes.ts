import { IProducts } from '../../data/products';

export enum ActionType {
    ADD_TO_CART = "ADD_TO_CART",
    DELETE_FROM_CART = "DELETE_FROM_CART",
    INCREASE_PRODUCT_COUNT = "INCREASE_PRODUCT_COUNT",
    DECREASE_PRODUCT_COUNT = "DECREASE_PRODUCT_COUNT",
    GET_TOTAL_PRICE = "GET_TOTAL_PRICE"
}

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

export type CartAction = AddToCartAction | DeleteFromCartAction | IncreaseAction | DecreaseAction;