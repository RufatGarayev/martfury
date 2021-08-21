import { ActionType, CompareAction } from '../actions/actionTypes';
import { IProducts } from '../../data/products';

const initialState = {
    compare: []
}

const compareReducer = (state: any = initialState, action: CompareAction) => {
    switch (action.type) {
        // adding product to compare
        case ActionType.ADD_TO_COMPARE:
            return {
                ...state, compare: [...state.compare, action.payload]
            };

        // remove from compare
        case ActionType.REMOVE_FROM_COMPARE:
            return {
                ...state,
                compare: state.compare.filter((product: IProducts) => product.id !== action.payload)
            }

        // making product's isIncompare true in the compare
        case ActionType.MAKE_IS_IN_COMPARE_TRUE_IN_COMPARE:
            return {
                ...state,
                compare: state.compare.map((product: IProducts) => product.id === action.payload ?
                    { ...product, isInCompare: product.isInCompare = true } : product)
            };

        // making product's isInCart false that's in compare
        case ActionType.MAKE_COMPARE_PRODUCT_ISINCART_FALSE:
            return {
                ...state,
                compare: state.compare.map((product: IProducts) => product.id === action.payload ?
                    { ...product, isInCart: product.isInCart = false } : product)
            };

        default:
            return state;
    }
}

export default compareReducer;