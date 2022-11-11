import React, { useState, useEffect } from "react";
import { getFormData } from "./getFormData";

const ContactForm = () => {
    const [formSent, setFormSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [inputText, setInputText] = useState("");
    const [clickedBtn, setClickedBtn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const validate = () => {
        if (
            userName.length > 0 &&
            userEmail.length > 0 &&
            inputText.length > 0 &&
            userEmail.includes("@")
        ) {
            return true;
        }
    };

    const againMsgHandler = () => {
        setClickedBtn(false);
        setFormSent(false);
    };

    const saveSessionMessage = (msg) => {
        if (typeof window !== "undefined") {
            sessionStorage.setItem("message", msg);
        }
    };

    const getSessionMessage = () => {
        if (typeof window !== "undefined") {
            if (sessionStorage.getItem("message") === null) {
                sessionStorage.setItem("message", "");
            } else {
                let localMessage = sessionStorage.getItem("message");
                setInputText(localMessage);
            }
        }
    };

    useEffect(() => {
        getSessionMessage();
    }, []);

    useEffect(() => {
        if (formSent) {
            setInputText("");
            saveSessionMessage("");
        }
    }, [formSent]);

    async function sendData(e) {
        e.preventDefault();

        var form = e.target;
        var formData = getFormData(form);
        var data = formData.data;
        let errMsg = "Wybacz, coś poszło nie tak! Proszę, spróbuj ponownie...";

        // If a honeypot field is filled, assume it was done so by a spam bot.
        if (formData.honeypot) {
            return false;
        }

        var encoded = Object.keys(data)
            .map(function (k) {
                return (
                    encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
                );
            })
            .join("&");

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzljGKLxBfN2kWvimrtIEiIxOXMtUfGyDQeHIfy/exec",
                {
                    method: "post",
                    body: encoded,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            );
            if (response.ok) {
                setFormSent(true);
            } else {
                setErrorMessage(errMsg);
                saveSessionMessage(inputText);
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage(errMsg);
            saveSessionMessage(inputText);
        } finally {
        }
    }

    return (
        <>
            {!formSent && (
                <div>
                    <h3 className="form-header">
                        Możesz też skorzystać
                        <br />z naszego formularza:
                    </h3>

                    <form
                        className="input-form"
                        id="contact"
                        name="contact"
                        required
                        onSubmit={sendData}
                    >
                        <label>
                            Jak się nazywasz?
                            <br />
                            <input
                                className="form-field"
                                name="name"
                                type="text"
                                autoComplete="name"
                                maxLength="100"
                                required
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </label>
                        <label>
                            <br />
                            Podaj swój adres email:
                            <br />
                            <input
                                className="form-field"
                                name="email"
                                type="email"
                                autoComplete="email"
                                maxLength="100"
                                required
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <br />
                            Co możemy dla Ciebie zrobić?
                            <br />
                            <textarea
                                className="form-field"
                                name="message"
                                placeholder="Wpisz wiadomość..."
                                maxLength="350"
                                cols="35"
                                rows="10"
                                required
                                defaultValue={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                //onChange={inputTextHandler}
                            />
                        </label>
                        <br />
                        <input type="hidden" name="honeypot" defaultValue="" />
                        <button
                            className={`form-field btn ${
                                clickedBtn ? "clicked" : ""
                            }`}
                            name="submit"
                            type="submit"
                            disabled={!validate()}
                            //onClick={() => setClickedBtn(true)}
                        >
                            WYŚLIJ
                        </button>
                    </form>
                </div>
            )}
            {formSent && (
                <div className="thank-you">
                    <p>
                        Dziękujemy za Twoją wiadomość :-&#41;
                        <br />
                        Spodziewaj się niedługo naszej odpowiedzi!
                    </p>
                    <p className="write-again">
                        Chcesz napisać do nas ponownie?
                        <br />
                        Kliknij poniższy guzik 👇
                    </p>
                    <button
                        className="btn-write-again"
                        onClick={() => againMsgHandler()}
                    >
                        NOWA WIADOMOŚĆ
                    </button>
                </div>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
    );
};

export default ContactForm;
