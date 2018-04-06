import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import App from "./App";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducer from "./reducers";



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


console.log(store.getState());

ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
    document.getElementById("root")
);
