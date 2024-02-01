import React from "react";
import pizza from "../assets/images/pizza.png";

const CartItems = ({ cartItem }) => {
  return (
    <>
      <div className="cart-item max-w-[500px] mx-auto h-[200px] flex items-center justify-center border">
        <img className="h-full" src={cartItem.img} alt="" />
        <div>
          <h2>name:{cartItem.name}</h2>
          <h4>price:{cartItem.price}</h4>
          <p>quantity:</p>
        </div>
      </div>
    </>
  );
};

export default CartItems;
