import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const scrollToById = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scroll({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favorite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, on delicious mean at a time.
        </p>
        <button
          onClick={() => {
            navigate("/");
            scrollToById("explore-menu");
          }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
