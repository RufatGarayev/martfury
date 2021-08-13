import { createStore, combineReducers  } from 'redux';
import throttle from 'lodash/throttle';
import productReducer from "../reducers/productReducer";
import { loadState, saveState } from './localStorage';

const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(
        combineReducers({
            products: productReducer
        }),
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.subscribe(throttle(() => {
        saveState({
            cart: store.getState().cart
        })
    }, 1000))

    return store;
}

export default configureStore;