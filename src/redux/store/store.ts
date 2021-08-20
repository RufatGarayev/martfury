import { createStore } from "redux";
import reducers from "../reducers/index";

// convert object to string and store in localStorage
function saveToLocalStorage(state: any) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

// create our store from our reducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(reducers, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage({
    cart: store.getState().cart,
    wishlist: store.getState().wishlist,
    compare: store.getState().compare
}));

export default store;