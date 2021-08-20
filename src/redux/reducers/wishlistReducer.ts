import { ActionType, WishlistAction } from '../actions/actionTypes';
import { IProducts } from '../../data/products';

const initialState = {
    wishlist: []
}

const wishlistReducer = (state: any = initialState, action: WishlistAction) => {
    switch (action.type) {
        // adding product to Wishlist
        case ActionType.ADD_TO_WISHLIST:
            return {
                ...state, wishlist: [...state.wishlist, action.payload]
            };

        // making product's isInWishlist true in the Wishlist
        case ActionType.MAKE_IS_IN_WISHLIST_TRUE_IN_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.map((product: IProducts) => product.id === action.payload ?
                    { ...product, isInWishlist: product.isInWishlist = true } : product)
            };

        // making product's isInCart false that's in Wishlist
        case ActionType.MAKE_WISHLIST_PRODUCT_ISINCART_FALSE:
            return {
                ...state,
                wishlist: state.wishlist.map((product: IProducts) => product.id === action.payload ?
                    { ...product, isInCart: product.isInCart = false } : product)
            };

        // removing product from Wishlist
        case ActionType.REMOVE_FROM_WISHLIST:
            return {
                ...state, wishlist: state.wishlist.filter((product: IProducts) =>
                    product.id !== action.payload)
            };

        default:
            return state;
    }
}

export default wishlistReducer;