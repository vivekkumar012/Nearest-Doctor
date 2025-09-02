import React from "react";
import Navbar from "./Navbar";
import doctor from "../assets/doctor.webp";
import patient from "../assets/about1.jpg"
import { Link } from "react-router-dom";

const Chooser = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Title */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-semibold text-blue-600">Sign Up</h1>
        <p className="mt-2 text-gray-600">Choose your role to continue</p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-12 mt-12 flex-wrap">
        {/* Doctor Card */}
        <div className="w-80 bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <img
            src={doctor}
            alt="Doctor"
            className="h-40 w-full object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">As a Doctor</h2>
          <Link to={"/register"} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Sign Up
          </Link>
        </div>

        {/* Patient Card */}
        <div className="w-80 bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
          <img
            src={patient}
            alt="Patient"
            className="h-40 w-full object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">As a Patient</h2>
          <Link to={"/register"} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Already have account */}
      <div className="text-center mt-10">
        <p className="text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Chooser;
