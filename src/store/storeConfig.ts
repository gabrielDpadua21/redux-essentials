import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numbers: function(state: any, action: any) {
        
        switch (action.type) {
            case 'NUM_MIN_CHANGE':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_CHANGE':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 7,
                    max: 31
                }
        }

       
    }
});

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;