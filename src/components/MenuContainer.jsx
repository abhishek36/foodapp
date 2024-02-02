import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../features/food/foodSlice";
import MenuCard from "./MenuCard";

const MenuContainer = () => {
  const { allFood } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto pt-[80px]">
          <h2 className="text-[50px] font-medium uppercase text-center text-[crimson]">
            our menus
          </h2>
          <div className="flex justify-between flex-wrap py-10">
            {allFood?.map((food) => (
              <MenuCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuContainer;
