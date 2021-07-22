import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import CopyrightBar from "./components/CopyrightBar";
import "./styles/style.css";
import useResizeObserver from "use-resize-observer";

const App = () => {
    const scrollToTop = useRef(null);
    const [vtScroll, setVtScroll] = useState(false);
    const [panoScroll, setPanoScroll] = useState(false);
    const { ref, height } = useResizeObserver();

    return (
        <>
            <Navbar setPanoScroll={setPanoScroll} setVtScroll={setVtScroll} />
            <div className="main" ref={scrollToTop}>
                <div ref={ref} className="inner-main">
                    <Routes
                        panoScroll={panoScroll}
                        setPanoScroll={setPanoScroll}
                        vtScroll={vtScroll}
                        setVtScroll={setVtScroll}
                    />
                </div>
            </div>
            <CopyrightBar scrollToTop={scrollToTop} height={height} />
        </>
    );
};

export default App;
