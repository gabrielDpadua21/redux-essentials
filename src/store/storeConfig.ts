import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numbers: function(state: any, action: any) {
        console.log('state: ', state);
        console.log('action: ', action);
        return {
            min: 1,
            max: 10
        }
    }
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;