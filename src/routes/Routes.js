import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Gallery from "../components/Gallery";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
    </Switch>
);

export default Routes;
