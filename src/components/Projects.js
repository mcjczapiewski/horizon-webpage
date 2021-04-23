import React from "react";
import favicon from "../assets/images/just_blades.svg";

const Projects = () => {
    return (
        <div className="Projects">
            <h2>
                Zobacz gdzie już byliśmy! Szukaj na mapie&nbsp;
                <img className="icon-horizon" src={favicon} alt="" />
                <br />
                Kliknij i odwiedź miejsce z panoramą 360°.
            </h2>
            <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1DMe7n9Y17vkRPAhOGwqRahjHLmZwJsx4"
                title="we-were-here"
                id="google-we-were-here"
                rel="noopener noreferrer"
            ></iframe>
        </div>
    );
};

export default Projects;
