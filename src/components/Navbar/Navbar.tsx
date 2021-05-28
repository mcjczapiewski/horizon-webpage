import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import logo from "../../logo.svg";
import chevronRight from "../../assets/images/chevron-right.svg";

interface IProps {
  setPanoScroll: Dispatch<SetStateAction<boolean>>;
  setVtScroll: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setPanoScroll, setVtScroll } : IProps) => {
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

    const onScroll: EventListener = (e: Event) => {
      if (e.target){
      var element = e.target as HTMLElement;
        if (element.scrollTop > 40) {
            document
                .getElementsByClassName("navbar-items")[0]
                .classList.add("animate");
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.add("visible");
            setClickedMenuBtn(false);
        } else if (element.scrollTop < 40) {
            document
                .getElementsByClassName("navbar-items")[0]
                .classList.remove("animate");
            document
                .getElementsByClassName("fa-arrow-alt-circle-up")[0]
                .classList.remove("visible");
        }
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
                    to="/"
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
                                        clickedMenuBtn && title === "Galeria"
                                            ? "active"
                                            : ""
                                    }`}
                                    src={chevronRight}
                                    alt=""
                                    onClick={handleClick}
                                />
                            </div>
                            {title === "Galeria" && (
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
                                            Wycieczki
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
