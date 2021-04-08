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
                        po Muzeum Geodezji:
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
                        <h3>Rozwijamy Google Street View</h3>
                        <img
                            className="maps-icon"
                            src="../../maps-icon.png"
                            alt=""
                        />
                    </span>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1617820045342!6m8!1m7!1sCAoSLEFGMVFpcE0xSXZpbTFGak1YdFBsUWZOWFE3c2lWdWFEcWwtVlhLNVJ6eGZa!2m2!1d52.2678734!2d21.0618451!3f331.8381529629467!4f19.556747678851536!5f0.9028122286144149"
                        width="500"
                        height="500"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        title="GoogleMaps"
                        id="google-iframe"
                        rel="noopener noreferrer"
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
            <h2>
                Zobacz gdzie już byliśmy!
                <br />
                Szukaj na mapie&nbsp;
                <img className="icon-horizon" src="./icon.png" alt="" />
            </h2>
            <iframe
                src="https://www.google.com/maps/d/u/1/embed?mid=1DMe7n9Y17vkRPAhOGwqRahjHLmZwJsx4"
                width="500px"
                height="500px"
                title="we-were-here"
                id="google-we-were-here"
                rel="noopener noreferrer"
            ></iframe>
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
