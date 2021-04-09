import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
import Projects from "../components/Projects";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/projects" component={Projects} />
    </Switch>
);

export default Routes;
