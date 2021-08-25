import { combineReducers } from 'redux';
import primaryReducer from './primaryReducer';
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from './wishlistReducer';
import compareReducer from './compareReducer';

const reducers = combineReducers({
    primary: primaryReducer,
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>