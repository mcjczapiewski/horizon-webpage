import React, { useEffect, useRef, Dispatch, SetStateAction } from "react";
import wpg from "../assets/images/wpg.jpg";
import szalas from "../assets/images/szalas.jpg";
import GalleryItems from "../assets/panos/GalleryItems.json";

interface IProps {
  panoScroll: boolean;
  setPanoScroll: Dispatch<SetStateAction<boolean>>;
  vtScroll: boolean;
  setVtScroll: Dispatch<SetStateAction<boolean>>;
}

interface GalleryTypes {
  title: string;
  url: string;
  cName: string;
  imgLink: string;
  type: string;
}


const Gallery = ({ panoScroll, setPanoScroll, vtScroll, setVtScroll } : IProps) => {
    const panoRef = useRef<HTMLHeadingElement>(null);
    const vtRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (panoScroll) {
            setTimeout(() => {
              if (panoRef.current) {

                panoRef.current.scrollIntoView();
              }
            }, 200);
            setPanoScroll(false);
        } else if (vtScroll) {
            setTimeout(() => {
              if (vtRef.current) {
                vtRef.current.scrollIntoView();
              }
            }, 200);
            setVtScroll(false);
        }
    });

    return (
        <div className="Gallery">
            <br />
            <h2 ref={vtRef}>Wycieczki wirtualne</h2>
            <div className="tours-gallery">
                {GalleryItems.map(({ title, url, cName, imgLink, type }: GalleryTypes) => {
                    if (type === "VT") {
                        return galleryRender(imgLink, cName, title, url);
                    }
                    return false;
                })}
            </div>
            <h2 ref={panoRef}>Panoramy 360°</h2>
            <div className="panos-gallery">
                {GalleryItems.map(({ title, url, cName, imgLink, type }: GalleryTypes) => {
                    if (type === "360P") {
                        return galleryRender(imgLink, cName, title, url);
                    }
                    return false;
                })}
            </div>
            <div className="showrooms">
                <span className="wpg-span">
                    <h4>
                        Wykonaliśmy panoramy 360° do spaceru
                        <br />
                        wirtualnego po Muzeum Geodezji:
                    </h4>
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
                    <h4>
                        Na życzenie wysyłamy na maila przykład
                        <br />
                        spaceru wirtualnego mieszkania.
                        <br />
                        Zapraszamy do kontaktu.
                    </h4>
                    <img id="szalas-image" src={szalas} alt="" />
                </span>
            </div>
        </div>
    );

    function galleryRender(imgLink: string, cName: string, title: string, url: string) {
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
};

export default Gallery;
