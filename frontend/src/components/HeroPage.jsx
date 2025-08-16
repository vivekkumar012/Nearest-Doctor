import React from "react";
import sec from "../assets/bg_1.jpg";

const HeroPage = () => {
  return (
    <div>
      <section className="lg:pt-[60px] pt-[30px] lg:h-[750px] p-5">
        <div>
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text_para">
                  Dedicated to providing exceptional medical care and support to
                  ensure every patient enjoys the best possible health. Our team
                  of experienced doctors work tirelessly to diagnose, treat, and
                  manage various health conditions with compassion and
                  expertise.
                </p>
                <button className="bg-blue-700 px-4 py-2 rounded-md text-white mt-5">
                  Request an Appointment
                </button>
              </div>
            </div>
            <div>
              <img src={sec} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
