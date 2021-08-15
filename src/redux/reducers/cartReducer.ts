import { CartAction, ActionType } from '../actions/actionTypes';
import { IProducts } from '../../data/products';

const initialState = {
    cart: []
}

const cartReducer = (state: any = initialState, action: CartAction) => {
    switch (action.type) {
        // add to cart
        case ActionType.ADD_TO_CART:
            let alreadyExists: boolean = false;

            state.cart.forEach((product: IProducts) => {
                if (product.id === action.payload.id) {
                    alreadyExists = true;
                    product.count++;
                }
            });

            if (!alreadyExists) {
                state.cart.push({ ...action.payload, count: 1 });
            }

            return {
                ...state
            }

        // delete from cart
        case ActionType.DELETE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product: IProducts) => product.id !== action.payload)
            }

        // increasing product count
        case ActionType.INCREASE_PRODUCT_COUNT:
            return {
                ...state,
                cart: state.cart.map((product: IProducts) => product.id === action.payload ?
                    { ...product, count: product.count + 1 } : product)
            }

        // decreasing product count
        case ActionType.DECREASE_PRODUCT_COUNT:
            return {
                ...state,
                cart: state.cart.map((product: IProducts) => product.id === action.payload ?
                    { ...product, count: product.count - 1 } : product)
            }

        default:
            return state;
    }
};

export default cartReducer;