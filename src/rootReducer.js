import { combineReducers } from "redux";
import cartReducer from "./redux/cart/reducers";
import productReducer from "./redux/products/reducers";
import productManageReducer from "./redux/manageproducts/reducers";

export default combineReducers({
    cartReducer,
    productReducer,
    productManageReducer,
});