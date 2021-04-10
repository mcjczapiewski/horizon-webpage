import React from "react";
import wpg from "../assets/images/wpg.jpg";
import mapsIcon from "../assets/images/maps-icon.png";
import GalleryItems from "../assets/panos/GalleryItems.json";

function Gallery() {
    return (
        <div className="Gallery">
            <div className="showrooms">
                <span className="google-span">
                    <span className="google-text">
                        <h3>Rozwijamy Google Street View</h3>
                        <img className="maps-icon" src={mapsIcon} alt="" />
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
                        <img id="wpg-museum" src={wpg} alt="" />
                    </a>
                    <br />
                </span>
            </div>
            <br />
            <p className="font-with-dark-bg showroom-on-wish">
                Na życzenie wysyłamy na maila przykład
                <br />
                spaceru wirtualnego mieszkania.
                <br />
                Zapraszamy do kontaktu :-&#41;
            </p>
            <div className="panos-gallery">
                {GalleryItems.map(({ title, url, cName, imgLink }) => {
                    const image_link = require(`../assets/panos/${imgLink}`)
                        .default;
                    return (
                        <div className={cName} key={title}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="panos-container">
                                    <img src={image_link} alt="" />
                                    <div className="image-title">{title}</div>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Gallery;
