import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
export default combineReducers({
  allcategoryData: categoryReducer,
});
