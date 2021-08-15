import { ActionType } from "./actionTypes"

// add to cart
export const AddToCart = (product: any) => {
  return {
    type: ActionType.ADD_TO_CART, payload: product
  }
};

// delete from cart
export const DeleteFromCart = (id: number) => {
  return {
    type: ActionType.DELETE_FROM_CART, payload: id
  }
};

// increase product count
export const IncreaseProductCount = (id: number) => {
  return {
    type: ActionType.INCREASE_PRODUCT_COUNT, payload: id
  }
};

// decrease product count
export const DecreaseProductCount = (id: number) => {
  return {
    type: ActionType.DECREASE_PRODUCT_COUNT, payload: id
  }
};