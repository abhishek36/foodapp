import React from "react";
import Banner from "../components/Banner";
import MenuContainer from "../components/MenuContainer";
import banner from "../assets/images/banner-bg.jpg";

const Home = () => {
  return (
    <>
      <main style={{ backgroundImage: `url(${banner})` }} className="bg-cover">
        <Banner />
        <MenuContainer />
      </main>
    </>
  );
};

export default Home;
