import React, { useEffect, useRef, useState } from "react";
import { FetchComponent } from "./FetchComponent";

const Gallery = ({ panoScroll, setPanoScroll, vtScroll, setVtScroll }) => {
    const panoRef = useRef(null);
    const vtRef = useRef(null);
    const [galleryItems, setGalleryItems] = useState([]);
    const [renderGallery, setRenderGallery] = useState(false);
    const apiLink = "http://localhost:8010/proxy/vt/GalleryItems.json";
    // const apiLink = "https://horizon17.pl/vt/GalleryItems.json";

    useEffect(() => {
        if (panoScroll) {
            setTimeout(() => {
                panoRef.current.scrollIntoView();
            }, 200);
            setPanoScroll(false);
        } else if (vtScroll) {
            setTimeout(() => {
                vtRef.current.scrollIntoView();
            }, 200);
            setVtScroll(false);
        }
    });

    useEffect(() => {
        return () => {
            setRenderGallery(false);
        };
    }, []);

    FetchComponent(apiLink, setGalleryItems, setRenderGallery);

    if (!renderGallery) {
        return <div className="Gallery">Loading...</div>;
    } else {
        return (
            <div className="Gallery">
                <h2 ref={vtRef}>Wirtualne spacery</h2>
                <div className="tours-gallery">
                    {galleryItems.map(
                        ({ title, url, cName, imgLink, type }) => {
                            if (type === "VT") {
                                return galleryRender(
                                    imgLink,
                                    cName,
                                    title,
                                    url
                                );
                            }
                            return false;
                        }
                    )}
                </div>
                <h2 ref={panoRef}>Panoramy 360°</h2>
                <div className="panos-gallery">
                    {galleryItems.map(
                        ({ title, url, cName, imgLink, type }) => {
                            if (type === "360P") {
                                return galleryRender(
                                    imgLink,
                                    cName,
                                    title,
                                    url
                                );
                            }
                            return false;
                        }
                    )}
                </div>
            </div>
        );
    }

    function galleryRender(imgLink, cName, title, url) {
        const image_link = `https://horizon17.pl/vt/galleryImages/${imgLink}`;
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
