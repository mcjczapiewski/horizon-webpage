import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Routes = () => (
    <Switch>
        <Route exact path="/aniapanato" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
);

export default Routes;
