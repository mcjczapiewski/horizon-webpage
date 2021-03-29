import logo from "./logo.svg";
import "../node_modules/three-dots/dist/three-dots.css";

function App() {
    return (
        <div className="main">
            <div className="App">
                {/* <video autoPlay muted loop id="myVideo">
                <source src="./kacwin.mp4" type="video/mp4" />
            </video> */}
                <img className="logo-mainpage" src={logo} alt="" />
                <div className="showrooms">
                    <h3>
                        Przykład wykonanych przez nas panoram 360°
                        <br />
                        dla Warszawskiego Przedsiębiorstwa Geodezyjnego:
                    </h3>
                    <a
                        href="https://www.wpg.com.pl/muzeum/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="./wpg.jpg" alt="" />
                    </a>
                    <br />
                    <br />
                    <h4>
                        Na życzenie wysyłamy na maila przykład
                        <br />
                        spaceru wirtualnego mieszkania.
                        <br />
                        Zapraszamy do kontaktu :-)
                    </h4>
                </div>
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
        </div>
    );
}

export default App;
