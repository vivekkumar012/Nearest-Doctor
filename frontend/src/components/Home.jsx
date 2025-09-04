import React from "react";
import Navbar from "./Navbar";
import HeroPage from "./HeroPage";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <HeroPage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
