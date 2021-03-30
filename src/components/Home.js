import logo from "../logo.svg";
import "../../node_modules/three-dots/dist/three-dots.css";

function Home() {
    return (
        <div className="Home">
            <img className="logo-mainpage" src={logo} alt="" />
            <div className="showrooms">
                <span className="wpg-span">
                    <h3>
                        Wykonaliśmy panoramy 360° do spaceru wirtualnego
                        <br />
                        po muzeum geodezyjnym:
                    </h3>
                    <a
                        href="https://www.wpg.com.pl/muzeum/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img id="wpg-museum" src="./wpg.jpg" alt="" />
                    </a>
                    <br />
                </span>
                <span className="google-span">
                    <span className="google-text">
                        <h3>Wspieramy rozwój Google Maps</h3>
                        <img
                            className="maps-icon"
                            src="../../maps-icon.png"
                            alt=""
                        />
                    </span>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1617136607651!6m8!1m7!1sCAoSLEFGMVFpcE9WSmpMRjVqMWxSNFRadkMwbll0Y29TWmM1SDdXY0pYVFdqbEtY!2m2!1d52.32080097!2d20.97492814!3f314.08!4f-66.8!5f0.8635291576552315"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        title="GoogleMaps"
                        id="google-iframe"
                    ></iframe>
                </span>
            </div>
            <br />
            <h4>
                Na życzenie wysyłamy na maila przykład
                <br />
                spaceru wirtualnego mieszkania.
                <br />
                Zapraszamy do kontaktu :-)
            </h4>
            <div className="changing">
                <h2>Zmieniamy się dla Ciebie</h2>
                <div className="dot-windmill"></div>
            </div>
            <div className="external-links">
                <a
                    href="https://facebook.com/horizon17vt/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="./face.png" alt="" />
                </a>
                <a
                    href="https://www.instagram.com/horizon17vt/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="./inst.png" alt="" />
                </a>
            </div>
        </div>
    );
}

export default Home;
