import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Gallery from "../components/Gallery";
/* import Projects from "../components/Projects"; */
import Contact from "../components/Contact";
import Prices from "../components/Prices";
import About from "../components/About";
import WhatIsIt from "../components/WhatIsIt";

const WebRoutes = ({ panoScroll, setPanoScroll, vtScroll, setVtScroll }) => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
            exact
            path="/spacery-wirtualne"
            element={
                <Gallery
                    panoScroll={panoScroll}
                    setPanoScroll={setPanoScroll}
                    vtScroll={vtScroll}
                    setVtScroll={setVtScroll}
                />
            }
        />
        {/* <Route path="/projects" element={<Projects/>} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatisit" element={<WhatIsIt />} />
    </Routes>
);

export default WebRoutes;
