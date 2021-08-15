import { products } from '../../data/products';
// import { Action, ActionType } from '../actions/actionTypes';

const initialState = {
    products: products
}

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default productReducer;