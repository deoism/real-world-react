<<<<<<< HEAD
import { createStore, applyMiddleware, combineReducers } from "redux";
import {promiseMiddleware, localStorageMiddleware} from "./middleware";
import auth from "./reducers/Auth";
import common from "./reducers/common";
import home from "./reducers/home";
import settings from "./reducers/settings";



const reducer = combineReducers({
auth,
common,
home,
settings
});

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(promiseMiddlewaremiddleware, localStorageMiddleware),
        window.devToolsExtensioin ? window.devToolsExtension() :f => f
    )
);

export default store;



=======
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";

import auth from "./reducers/auth";
import common from "./reducers/common";
import home from "./reducers/home";

const reducer = combineReducers({
  auth,
  common,
  home
});

const store = createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware, localStorageMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
