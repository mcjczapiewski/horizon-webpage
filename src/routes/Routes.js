import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
/* import Projects from "../components/Projects"; */
import Contact from "../components/Contact";
import Prices from "../components/Prices";
import About from "../components/About";
import WhatIsIt from "../components/WhatIsIt";

const Routes = ({ panoScroll, setPanoScroll, vtScroll, setVtScroll }) => (
    <Switch>
        <Route exact path="/aniapanato" component={Home} />
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
        {/* <Route path="/projects" component={Projects} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/prices" component={Prices} />
        <Route path="/about" component={About} />
        <Route path="/whatisit" component={WhatIsIt} />
    </Switch>
);

export default Routes;
