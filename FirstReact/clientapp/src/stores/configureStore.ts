import { createStore, combineReducers } from 'redux';
import counterReducer from '../reducers/counter';

const rootReducer = combineReducers({
    counterReducer,
});

const store = createStore(rootReducer);

export default store;