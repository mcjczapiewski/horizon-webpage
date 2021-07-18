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
                    <h4>
                        Jesteśmy pasjonatami nowoczesnych rozwiązań i
                        fotografii.
                    </h4>
                    <p>
                        Zaczynaliśmy od wykonywania ujęć z drona, a teraz
                        schodzimy na ziemię i udostępniamy wirtualną
                        rzeczywistość.
                    </p>
                    <p>
                        Męska precyzja i znajomość najnowszych trendów
                        informatycznych oraz kobiece poczucie estetyki i
                        wrażliwość na detale pomogły nam stworzyć duet (prawie)
                        idealny.
                    </p>
                    <p>
                        Do każdego miejsca podchodzimy kreatywnie i
                        nieszablonowo, a podczas realizacji projektu,
                        dopracowujemy szczegóły do momentu, aż spełni
                        oczekiwania klienta.
                    </p>
                    <h4>Realizujemy zlecenia na terenie całej Polski.</h4>
                    <h4>Skontaktuj się z nami, a pomożemy Ci zrealizować:</h4>
                    <ul>
                        <li>Panoramiczne zdjęcia 360°</li>
                        <li>Wirtualny spacer</li>
                        <li>Wizytówkę Google</li>
                    </ul>
                    <h4>Wykonujemy zdjęcia dla:</h4>
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
                    </ul>
                    <p className="branz">oraz wielu innych branż.</p>
                    <p>
                        Fotografie robimy z wykorzystaniem profesjonalnego
                        zestawu przeznaczonego do tego rodzaju prac. Obrazy
                        uzyskane przez lustrzankowy aparat cyfrowy to lepsza
                        jakość, wyższa rozdzielczość i dokładniej widoczne
                        szczegóły w porównaniu do amatorskich kamer 360°.
                    </p>
                </div>
            </div>
            <div className="column-two">
                <div className="tell-us">
                    <p>
                        Powiedz nam czego potrzebujesz i zapytaj o bezpłatną
                        wycenę!
                    </p>
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-links"
                        to="/contact"
                    >
                        {/* -&gt; KONTAKT &lt;- */}
                        👉 KONTAKT 👈
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
                        <a
                            href="https://www.google.com/maps/contrib/111374012923096269518/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="maps-icon" src={mapsIcon} alt="" />
                        </a>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default About;
