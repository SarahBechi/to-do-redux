import { createStore, combineReducers } from "redux";
import listReducer from './reducers/listReducer';
import inputReducer from './reducers/inputReducer';



const store = createStore(combineReducers({
    listReducer: listReducer,
    inputReducer: inputReducer,

})
)
export default store;