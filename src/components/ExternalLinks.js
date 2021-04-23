import React from "react";
import insta from "../assets/images/inst.svg";
import face from "../assets/images/face.svg";

export const ExternalLinks = (
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
);
