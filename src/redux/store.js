import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "../redux/Reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const middleware = [thunk];
const initalstore = {};

export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(...middleware)),

  initalstore
);
