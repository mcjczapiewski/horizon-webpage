import React from "react";
import insta from "../assets/images/inst.png";
import face from "../assets/images/face.png";

const CopyrightBar = () => {
    return (
        <div className="copyright-bar">
            <div className="external-links">
                <a
                    href="https://facebook.com/horizon17vt/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={face} alt="" />
                </a>
                <a
                    href="https://www.instagram.com/horizon17vt/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={insta} alt="" />
                </a>
            </div>
            <div className="copyright">© Horizon17 Virtual Tours 2021</div>;
        </div>
    );
};

export default CopyrightBar;
