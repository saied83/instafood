import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets";
import { Link, ScrollRestoration, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContext";
import toast from "react-hot-toast";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { getTotalCartAmount } = useStoreContext();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToById = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scroll({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className={`navbar ${!scrolled ? "" : "scrolled"}`}>
      <img
        src="/logo.png"
        alt=""
        className="logo"
        onClick={() => {
          setMenu("home");
          navigate("/");
          scrollToById("home");
        }}
      />
      <ul className="navbar-menu">
        <a
          onClick={() => {
            setMenu("home");
            navigate("/");
            scrollToById("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </a>
        <a
          onClick={() => {
            setMenu("menu");
            navigate("/");
            scrollToById("explore-menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          onClick={() => {
            setMenu("mobile-app");
            navigate("/");
            scrollToById("app-download");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          onClick={() => {
            setMenu("contact-us");
            navigate("/");
            scrollToById("footer");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          onClick={() => toast.error("Search filter does not work on demo.")}
          alt=""
        />
        <div className="navbar-search-icon">
          <img
            src={assets.basket_icon}
            onClick={() => {
              if (getTotalCartAmount() === 0) {
                toast.error("Select any food first!");
                setMenu("menu");
                navigate("/");
                scrollToById("explore-menu");
              } else {
                navigate("/cart");
              }
            }}
            alt=""
          />

          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
            window.scrollTo(0, 0);
          }}
        >
          Login{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
