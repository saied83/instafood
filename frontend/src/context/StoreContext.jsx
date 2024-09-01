import React, { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets";

const StoreContext = createContext();

const useStoreContext = () => {
  return useContext(StoreContext);
};

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("add-to-cart")) || {}
  );
  useEffect(() => {
    localStorage.setItem("add-to-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  return (
    <StoreContext.Provider
      value={{ food_list, cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContextProvider as default, useStoreContext, StoreContext };
