import { ActionType } from "./actionTypes";
import { IProducts } from "../../data/products";


export const AddToWishlist = (product: IProducts) => {
    return {
        type: ActionType.ADD_TO_WISHLIST, payload: product
    }
};

export const MakeIsInWishlistTrueInWishlist = (id: number) => {
    return {
        type: ActionType.MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST, payload: id
    }
};

export const WishlistProductIsInCartFalse = (id: number) => {
    return {
        type: ActionType.MAKE_WISHLIST_PRODUCT_ISINCART_FALSE, payload: id
    }
};

export const RemoveFromWishlist = (id: number) => {
    return {
        type: ActionType.REMOVE_FROM_WISHLIST, payload: id
    }
};