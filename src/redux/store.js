import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// IMPORTING REDUCERS
import singleProductRed from "./reducer";

const middleware = applyMiddleware(thunk, logger);

const rootReducer = combineReducers({
  singleProductRed,
});

const store = createStore(
  rootReducer,
  compose(
    middleware
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
