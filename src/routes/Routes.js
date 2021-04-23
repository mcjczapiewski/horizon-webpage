import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";

const Routes = ({ panoScroll, setPanoScroll, vtScroll, setVtScroll }) => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route
            exact
            path="/gallery"
            render={(props) => (
                <Gallery
                    panoScroll={panoScroll}
                    setPanoScroll={setPanoScroll}
                    vtScroll={vtScroll}
                    setVtScroll={setVtScroll}
                    {...props}
                />
            )}
        />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
    </Switch>
);

export default Routes;
