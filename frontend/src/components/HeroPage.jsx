import React from "react";
import sec from "../assets/bg_1.jpg";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <section className="pt-24 px-5 bg-white min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl leading-snug text-headingColor font-extrabold md:text-5xl md:leading-tight">
            We help patients live a healthy, longer life
          </h1>
          <p className="text-base font-medium mb-6 text-gray-600 mt-4">
            Dedicated to providing exceptional medical care and support to
            ensure every patient enjoys the best possible health. Our team of
            experienced doctors work tirelessly to diagnose, treat, and
            manage various health conditions with compassion and expertise.
          </p>
          <Link
            to="/appointment"
            className="inline-block bg-blue-700 px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-800 transition"
          >
            Request an Appointment
          </Link>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={sec}
            alt="Healthcare"
            className="rounded-xl shadow-lg max-h-[480px] w-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
