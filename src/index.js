<<<<<<< HEAD
import ReactDOM from 'react-dom';
import React from "react";
import { Provider } from "react-redux";
import {Router,Route,IndexRoute,hashHistory} from "react-router";

import store 	from 	"./store";
import App 		from 	"./components/Apps";
import Home 	from 	"./components/Home";
import Login 	from 	"./components/Login";
import Register from 	"./components/Register";
import Settings from 	"./components/Settings";



ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/settings" component={Settings} />
			</Route>
		</Router>
	</Provider>,
		document.getElementById("root")
);
=======
import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
//react-router ^2.8.1
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import store from "./store";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
