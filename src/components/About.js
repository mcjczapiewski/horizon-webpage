import React from "react";
import mapsIcon from "../assets/images/maps-icon.svg";

const About = () => {
    return (
        <div className="About">
            <div className="column-one">
                <div className="about-text">
                    Jesteśmy pasjonatami nowoczesnych rozwiązań i fotografii.
                    <br />
                    <br />
                    Zaczynaliśmy od wykonywania ujęć z drona, a teraz schodzimy
                    na ziemię i udostępniamy wirtualną rzeczywistość.
                    <br />
                    <br />
                    Męska precyzja i znajomość najnowszych trendów
                    informatycznych oraz kobiece poczucie estetyki i wrażliwość
                    na detale pomogły nam stworzyć duet (prawie) idealny.
                    <br />
                    <br />
                    Do każdego miejsca podchodzimy kreatywnie i nieszablonowo, a
                    podczas realizacji projektu, dopracowujemy szczegóły do
                    momentu, aż w spełni oczekiwania klienta.
                    <br />
                    <br />
                    Realizujemy zlecenie na terenie całej Polski, a dojazd jest
                    całkowicie bezpłatny.
                    <br />
                    <br />
                    Skontaktuj się z nami, a pomożemy Ci zrealizować:
                    <ul>
                        <li>Panoramiczne zdjęcia 360°</li>
                        <li>Wirtualny spacer</li>
                        <li>Wizytówkę Google</li>
                    </ul>
                    Robimy zdjęcia dla:
                    <ul>
                        <li>Hoteli</li>
                        <li>Restauracji</li>
                        <li>Muzeów</li>
                        <li>Atrakcji turystycznych</li>
                        <li>Salonów kosmetycznych i fryzjerskich</li>
                        <li>Gabinetów lekarskich i dentystycznych</li>
                        <li>Deweloperów</li>
                        <li>Sklepów</li>
                        <li>Salonów Fitness</li>
                        oraz wielu innych branż.
                    </ul>
                    <div className="tell-us">
                        Powiedz nam czego potrzebujesz i zapytaj o bezpłatną
                        wycenę!
                    </div>
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
