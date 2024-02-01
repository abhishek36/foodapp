import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [fix, SetFix] = useState(false);
  const Scroll = () => {
    if (window.scrollY >= 75) {
      SetFix(true);
    } else {
      SetFix(false);
    }
  };
  window.addEventListener("scroll", Scroll);
  return (
    <>
      <nav
        className={`fixed font-lob z-10 top-0 left-0 right-0 duration-300 flex items-center justify-between px-5 ${
          fix ? "bg-pink-100" : null
        }`}
      >
        <div className="logo">
          <Link to={"/"}>
            <img
              src={logo}
              className="w-[110px]"
              alt="sharma pizza"
              title="sharma pizza"
            />
          </Link>
        </div>

        <ul className="flex gap-8 text-3xl capitalize text-[crimson] font-medium">
          <li>home</li>
          <li>about</li>
          <li>menu</li>
          <li>contact</li>
        </ul>

        <div className="relative">
          <Link to={"/cart"}>
            <GrCart className="text-3xl" />
            <div className="absolute bg-pink-400 w-6 h-6 flex items-center justify-center rounded-full top-[-10px] right-[-10px]">
              {cartItems.length}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
