import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";

const MenuCard = ({ food }) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(add(food));
  };
  return (
    <>
      <div className="fd-card border rounded-lg relative w-[32%] bg-pink-200">
        <div>
          <img
            src={food.img}
            alt=""
            className="absolute left-[50%] translate-x-[-50%] top-[-80px] w-[60%]
          "
          />
        </div>
        <div className="pt-[140px] px-4">
          <h3 className="text-center text-2xl font-medium">{food.name}</h3>
          <h4 className="text-center text-[18px] py-2">
            {food.desc.slice(0, 85)}
          </h4>
          <button
            onClick={() => handleCart(food)}
            className="bg-violet-500 px-2 py-1 text-xl capitalize"
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
