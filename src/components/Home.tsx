import React, { useEffect } from "react";
import logo from "../logo.svg";

const Home = () => {
    useEffect(() => {
        document
            .getElementsByClassName("navbar-logo-img")[0]
            .classList.add("hidden");

        return () =>
            document
                .getElementsByClassName("navbar-logo-img")[0]
                .classList.remove("hidden");
    }, []);

    return (
        <div className="Home">
            <a href="/">
                <img className="home-logo" src={logo} alt="" />
            </a>
            <div className="animated-title">
                <div className="text-top">
                    <div>
                        <span>Spacery wirtualne</span>
                        <span>Panoramy 360°</span>
                    </div>
                </div>
                <div className="text-bottom">
                    <div>Google Street View</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
