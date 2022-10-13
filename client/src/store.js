import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./redux/reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
	productReducer,
})

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store;