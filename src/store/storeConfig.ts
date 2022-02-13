import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numbers: function(state: any, action: any) {
        console.log('state: ', state);
        console.log('action: ', action);
        return {
            min: 7,
            max: 31
        }
    }
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;