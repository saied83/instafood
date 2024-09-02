import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { getTotalCartAmount } = useStoreContext();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`navbar ${!scrolled ? "" : "scrolled"}`}>
      <img
        src="/logo.png"
        alt=""
        className="logo"
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
      />
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </Link>
        <Link
          to="/#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </Link>
        <Link
          to="/#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </Link>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
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
