import React from "react";
import "./HomePart.css";
import Header from "../Header/Header";
import HomeCarousel from "./HomeCarousel";
import HomePart1 from "./HomePart1";
import HomePart2 from "./HomePart2";
import HomePart3 from "./HomePart3";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <Header />
          <HomeCarousel />
          <HomePart1 />
          <HomePart2 />
          <HomePart3 />
          <Footer />
        </div>
      </div>
    </>
  );
}
