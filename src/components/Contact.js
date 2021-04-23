import React from "react";
import { ExternalLinks } from "./ExternalLinks";

const Contact = () => {
    return (
        <div className="Contact">
            <h2 className="email-address">
                Napisz do nas na:
                <br />
                <a href="mailto:kontakt@horizon17.pl">kontakt@horizon17.pl</a>
            </h2>
            <h2 className="phone">
                lub zadzwoń:
                <br />
                <a href="tel:+48787016952">+48 787016952</a>
            </h2>
            <h3 className="face-insta">
                Znajdziesz nas też na
                <br />
                Facebooku i Instagramie:
            </h3>
            <div className="external-links">{ExternalLinks}</div>
            <h3 className="area-of-interest">
                Stacjonujemy w Warszawie,
                <br />
                ale jesteśmy mobilni.
                <br />
                Żadna droga nie jest nam straszna!
            </h3>
        </div>
    );
};

export default Contact;
