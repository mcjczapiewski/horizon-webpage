import React from "react";
import { NavLink } from "react-router-dom";
import mapsIcon from "../assets/images/maps-icon.svg";
import trusted from "../assets/images/trusted.png";
import ania from "../assets/images/ania-cien.jpg";
import maciek from "../assets/images/maciek-cien.jpg";

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
                </div>
            </div>
            <div className="column-two">
                <div className="tell-us">
                    Powiedz nam czego potrzebujesz i zapytaj o bezpłatną wycenę!
                    <br />
                    <br />
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-links"
                        to="/contact"
                    >
                        -&gt; KONTAKT &lt;-
                    </NavLink>
                    <br />
                    <br />
                </div>
                <span className="google-span">
                    <span className="stuff-span">
                        <div>
                            <img className="stuff ania" src={ania} alt="" />
                            <p>Ania</p>
                        </div>
                        <div>
                            <img className="stuff maciek" src={maciek} alt="" />
                            <p>Maciek</p>
                        </div>
                    </span>
                    <h5>Zaufaj autoryzowanym fotografom Google.</h5>
                    <br />
                    <img className="trusted" src={trusted} alt="" />
                    <span className="google-text">
                        <h5>W wolnym czasie rozwijamy Google Street View</h5>
                        <img className="maps-icon" src={mapsIcon} alt="" />
                    </span>
                </span>
            </div>
        </div>
    );
};

export default About;
