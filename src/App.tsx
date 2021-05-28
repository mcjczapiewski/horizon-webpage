import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import CopyrightBar from "./components/CopyrightBar";
import "./styles/style.css";

const App = () => {
    const scrollToTop = useRef<HTMLDivElement>(null);
    const [vtScroll, setVtScroll] = useState(false);
    const [panoScroll, setPanoScroll] = useState(false);

    return (
        <>
            <Navbar setPanoScroll={setPanoScroll} setVtScroll={setVtScroll} />
            <div className="main" ref={scrollToTop}>
                <div className="inner-main">
                    <Routes
                        panoScroll={panoScroll}
                        setPanoScroll={setPanoScroll}
                        vtScroll={vtScroll}
                        setVtScroll={setVtScroll}
                    />
                </div>
            </div>
            <CopyrightBar scrollToTop={scrollToTop} />
        </>
    );
};

export default App;
