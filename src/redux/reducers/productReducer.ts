import { products, IProducts } from '../../data/products';
import { 
    Action,
    //  ActionType 
} from '../actions/actionTypes';

export interface IState {
    products: IProducts[];
}

const initialState = {
    products: products
};

const productReducer = (state: IState = initialState, action: Action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default productReducer;