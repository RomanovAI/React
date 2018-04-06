import React from "react";
import {Route, Switch, HashRouter} from "react-router-dom";
import MoviesRender from "./MoviesRender";
import About from "./About";



export default function App()   {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={MoviesRender}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </HashRouter>
        )
}



