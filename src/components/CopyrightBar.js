import React from "react";
import { ExternalLinks } from "./ExternalLinks";

const CopyrightBar = ({ scrollToTop }) => {
    const executeScroll = () => {
        scrollToTop.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

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
