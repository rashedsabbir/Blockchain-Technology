import React from "react";
import { Navigate } from "react-router-dom";

const ContactUsDeailed = () => {
  return (
    <section
      className="ezy__sheader6 light py-14 md:py-24 text-zinc-900 dark:text-white bg-center bg-no-repeat bg-cover overflow-hidden relative z-[1] mx-12 my-4 rounded-2xl"
      style={{
        backgroundImage:
          "url(https://cdn.easyfrontend.com/pictures/background/abstract-background2.jpg)",
      }}
    >
      <div className="container px-4">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-30 -z-[1] bg-white dark:bg-[#0b1727]"></div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <h1 className="text-[35px] leading-snug font-bold md:text-6xl mb-2">
              Contact Us
            </h1>
            <p className="text-xl leading-snug opacity-75 mt-6">
              <a href="/">Home</a> {">"} Contact Us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsDeailed;
