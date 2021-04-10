import React from "react";
import wpg from "../assets/images/wpg.jpg";
import szalas from "../assets/images/szalas.jpg";
import GalleryItems from "../assets/panos/GalleryItems.json";

function Gallery() {
    return (
        <div className="Gallery">
            <div className="showrooms">
                <span className="wpg-span">
                    <h3>
                        Wykonaliśmy panoramy 360° do spaceru
                        <br />
                        wirtualnego po Muzeum Geodezji:
                    </h3>
                    <a
                        href="https://www.wpg.com.pl/muzeum/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="vignette">
                            <img id="wpg-museum" src={wpg} alt="" />
                        </div>
                    </a>
                </span>
                <span className="szalas-span">
                    <h3>
                        Na życzenie wysyłamy na maila przykład
                        <br />
                        spaceru wirtualnego mieszkania.
                        <br />
                        Zapraszamy do kontaktu :-&#41;
                    </h3>
                    <img id="szalas-image" src={szalas} alt="" />
                </span>
            </div>
            <br />
            <h2>Wycieczki wirtualne</h2>
            <div className="tours-gallery">
                {GalleryItems.map(({ title, url, cName, imgLink, type }) => {
                    if (type === "VT") {
                        return galleryRender(imgLink, cName, title, url);
                    }
                })}
            </div>
            <h2>Panoramy 360°</h2>
            <div className="panos-gallery">
                {GalleryItems.map(({ title, url, cName, imgLink, type }) => {
                    if (type === "360P") {
                        return galleryRender(imgLink, cName, title, url);
                    }
                })}
            </div>
        </div>
    );

    function galleryRender(imgLink, cName, title, url) {
        const image_link = require(`../assets/panos/${imgLink}`).default;
        return (
            <div className={cName} key={title}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="panos-container">
                        <div className="vignette">
                            <img src={image_link} alt="" />
                        </div>
                        <div className="image-title">{title}</div>
                    </div>
                </a>
            </div>
        );
    }
}

export default Gallery;
