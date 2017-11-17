import { createStore, applyMiddleware, combineReducers } from "redux";
import {promiseMiddleware, promiseMiddleware} from "./middleware";

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
        applyMiddleware(promiseMiddlewaremiddleware),
        window.devToolsExtensioin ? window.devToolsExtension() :f => f
    )
);

export default store;



