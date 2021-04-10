import React from "react";
import mapsIcon from "../assets/images/maps-icon.png";

const About = () => {
    return (
        <div className="About">
            <div className="column-one">
                <div className="about-text">
                    Zaczynaliśmy od wykonywania ujęć z drona, a teraz schodzimy
                    na ziemię i udostępniamy zainteresowanym możliwość zdalnego
                    wglądu do wnętrz pomieszczeń. Zwłaszcza teraz, kiedy mamy
                    ograniczoną możliwość przemieszczania się, chętniej
                    sprawdzamy, jak wygląda lokal, zanim odwiedzimy go
                    osobiście. Z własnego doświadczenia wiemy, że klient lubi
                    wiedzieć, co go czeka, dotyczy to wyglądu i rozmieszczenia
                    pomieszczeń, do których się wybiera, ale też ogólnej
                    przestrzeni, po której będzie się poruszał.
                </div>
            </div>
            <div className="column-two">
                <span className="google-span">
                    <span className="google-text">
                        <h3>W wolnym czasie rozwijamy Google Street View</h3>
                        <img className="maps-icon" src={mapsIcon} alt="" />
                    </span>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1617820045342!6m8!1m7!1sCAoSLEFGMVFpcE0xSXZpbTFGak1YdFBsUWZOWFE3c2lWdWFEcWwtVlhLNVJ6eGZa!2m2!1d52.2678734!2d21.0618451!3f331.8381529629467!4f19.556747678851536!5f0.9028122286144149"
                        width="600"
                        height="500"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        title="GoogleMaps"
                        id="google-iframe"
                        rel="noopener noreferrer"
                    ></iframe>
                </span>
            </div>
        </div>
    );
};

export default About;
