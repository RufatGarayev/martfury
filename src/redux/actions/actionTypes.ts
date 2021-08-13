export enum ActionType {
    GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
}

interface GetProductsSuccessAction {
    type: ActionType.GET_PRODUCTS_SUCCESS,
    payload: number
}

export type Action = GetProductsSuccessAction;