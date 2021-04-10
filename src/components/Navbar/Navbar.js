import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "../../logo.svg";

const Navbar = () => {
    const [clickedMenuBtn, setClickedMenuBtn] = useState(false);

    function handleClick() {
        if (window.innerWidth < 800) {
            setClickedMenuBtn(!clickedMenuBtn);
            if (document.getElementsByClassName("animated-title")[0]) {
                document
                    .getElementsByClassName("animated-title")[0]
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
                .classList.add("visible");
            setClickedMenuBtn(false);
        } else {
            document
                .getElementsByClassName("navbar-items")[0]
                .classList.remove("animate");
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.remove("visible");
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
                    {MenuItems.map(({ title, url, cName }) => (
                        <li onClick={handleClick} key={title}>
                            <div>
                                <NavLink
                                    exact
                                    activeClassName="active"
                                    className={cName}
                                    to={url}
                                >
                                    {title}
                                </NavLink>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
