import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
//react-router ^2.8.1
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import store from "./store";
import App from "./components/App";
import Home from "./components/Home/";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Editor from  "./components/Editor";
import Register from "./components/Register";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/settings" component={Settings} />
        <Route path="/editor" component={Editor} />
        <Route path="/register" component={Register} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
