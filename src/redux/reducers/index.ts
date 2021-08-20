import { combineReducers } from 'redux';
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from './wishlistReducer';
import compareReducer from './compareReducer';

const reducers = combineReducers({
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>