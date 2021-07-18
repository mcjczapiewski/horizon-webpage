import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ExternalLinks } from "./ExternalLinks";

const CopyrightBar = ({ scrollToTop }) => {
    const executeScroll = () => {
        scrollToTop.current.scrollTo(0, 0);
    };
    const location = useLocation();

    useEffect(() => {
        const height =
            document.getElementsByClassName("inner-main")[0].clientHeight;
        const pageHeight = window.innerHeight;
        if (height > pageHeight - 80 - 50 || location.pathname === "/gallery") {
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.add("visible");
        }
        return () => {
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.remove("visible");
        };
    }, [location.pathname]);

    return (
        <div className="copyright-bar">
            {ExternalLinks}
            <i
                className="far fa-arrow-alt-circle-up"
                onClick={executeScroll}
            ></i>
            <div className="copyright">© Horizon17 Virtual Tours 2021</div>;
        </div>
    );
};

export default CopyrightBar;
