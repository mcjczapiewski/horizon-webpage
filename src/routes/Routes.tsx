import { Dispatch, SetStateAction } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import Projects from "../components/Projects";

interface IProps {
    setPanoScroll: Dispatch<SetStateAction<boolean>>;
    setVtScroll: Dispatch<SetStateAction<boolean>>;
    panoScroll: boolean;
    vtScroll: boolean;
}

const Routes = ({
    panoScroll,
    setPanoScroll,
    vtScroll,
    setVtScroll,
}: IProps) => (
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
