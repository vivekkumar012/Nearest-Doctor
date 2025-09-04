import React from "react";
import Navbar from "./Navbar";
import HeroPage from "./HeroPage";
import Footer from "./Footer";
import DoctorsSection from "../pages/DoctorsSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <HeroPage />
        <DoctorsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
