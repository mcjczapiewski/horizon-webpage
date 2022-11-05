import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "../../logo.svg";
import chevronRight from "../../assets/images/chevron-right.svg";

const Navbar = ({ setPanoScroll, setVtScroll }) => {
    const [clickedMenuBtn, setClickedMenuBtn] = useState(false);

    function handleClick() {
        if (window.innerWidth < 800) {
            setClickedMenuBtn(!clickedMenuBtn);
            document
                .getElementsByClassName("close-popup-area")[0]
                .classList.toggle("active");
            if (document.getElementsByClassName("animated-title")[0]) {
                document
                    .getElementsByClassName("animated-title")[0]
                    .classList.toggle("hidden");
            }
            if (document.getElementsByClassName("inner-main")[0]) {
                document
                    .getElementsByClassName("inner-main")[0]
                    .classList.toggle("hidden");
            }
        }
    }

    const onScroll = (e) => {
        if (e.target.scrollTop > 40) {
            document
                .getElementsByClassName("navbar-items")[0]
                .classList.add("animate");
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.add("rotate");
            setClickedMenuBtn(false);
        } else if (e.target.scrollTop < 40) {
            document
                .getElementsByClassName("navbar-items")[0]
                .classList.remove("animate");
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.remove("rotate");
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", onScroll, true);

        return () => document.removeEventListener("scroll", onScroll, true);
    }, []);

    return (
        <>
            <nav className="navbar-items">
                <NavLink
                    className="navbar-logo"
                    to="/aniapanato"
                    onClick={() => {
                        setClickedMenuBtn(false);
                    }}
                >
                    <img className="navbar-logo-img" src={logo} alt="" />
                </NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    <i
                        className={
                            clickedMenuBtn ? "fas fa-times" : "fas fa-bars"
                        }
                    ></i>
                </div>
                <ul className={clickedMenuBtn ? "nav-menu active" : "nav-menu"}>
                    <div
                        className={`close-popup-area ${
                            clickedMenuBtn ? "active" : ""
                        }`}
                        onClick={handleClick}
                    ></div>
                    {MenuItems.map(({ title, url, cName }) => (
                        <li key={title}>
                            <div>
                                <NavLink
                                    exact
                                    activeClassName="active"
                                    className={cName}
                                    to={url}
                                    onClick={handleClick}
                                >
                                    {title}
                                </NavLink>
                                <img
                                    className={`chevron-right ${
                                        clickedMenuBtn &&
                                        title.toLowerCase() === "galeria"
                                            ? "active"
                                            : ""
                                    }`}
                                    src={chevronRight}
                                    onClick={handleClick}
                                    alt=""
                                />
                            </div>
                            {title.toLowerCase() === "galeria" && (
                                <>
                                    <div
                                        className={
                                            clickedMenuBtn
                                                ? "dropdown-menu active"
                                                : "dropdown-menu"
                                        }
                                    >
                                        <Link
                                            exact
                                            to="/gallery"
                                            onClick={() => setVtScroll(true)}
                                        >
                                            Wirtualne spacery
                                        </Link>
                                        <Link
                                            exact
                                            to="/gallery"
                                            onClick={() => setPanoScroll(true)}
                                        >
                                            Panoramy
                                        </Link>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
