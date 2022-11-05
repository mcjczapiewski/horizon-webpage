import React, { useEffect } from "react";
import { ExternalLinks } from "./ExternalLinks";

const CopyrightBar = ({ scrollToTop, height }) => {
    const executeScroll = () => {
        scrollToTop.current.scrollTo(0, 0);
    };

    useEffect(() => {
        const pageHeight = window.innerHeight;
        if (height > pageHeight - 80 - 50) {
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.add("visible");
        }
        return () => {
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.remove("visible");
        };
    }, [height]);

    return (
        <div className="copyright-bar">
            {ExternalLinks}
            <i
                className="far fa-arrow-alt-circle-up"
                onClick={executeScroll}
            ></i>
            <div className="copyright">© Horizon17 2022</div>;
        </div>
    );
};

export default CopyrightBar;
