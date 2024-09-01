import React from "react";
import "./Cart.css";
import { useStoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets";

const Cart = () => {
  const { cartItems, foot_list, addToCart, removeFromCart } = useStoreContext();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {})}
      </div>
    </div>
  );
};

export default Cart;
