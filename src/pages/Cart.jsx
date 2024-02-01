import React from "react";
import CartItems from "../components/CardItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <div className="mt-[100px]">
        {cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </>
  );
};

export default Cart;
