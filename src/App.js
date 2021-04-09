import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import CopyrightBar from "./components/CopyrightBar";
import "./styles/style.css";

const App = () => {
    const scrollToTop = useRef(null);

    return (
        <>
            <Navbar />
            <div className="main" ref={scrollToTop}>
                <div className="inner-main">
                    <Routes />
                </div>
            </div>
            <CopyrightBar scrollToTop={scrollToTop} />
        </>
    );
};

export default App;
