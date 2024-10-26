import React from "react";
import { Navigate } from "react-router-dom";

const ContactUsDeailed = () => {
  return (
    <div className="px-8 py-4">
      <section
        className="ezy__sheader6 light py-14 md:py-24 text-zinc-700 dark:text-white bg-center bg-no-repeat bg-cover overflow-hidden relative z-[1] rounded-2xl"
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
      <div className=" flex md:flex-row flex-col gap-12 py-12 justify-center">
        <div className="bg-white rounded-md shadow-md relative ">
          <img
            src="https://demo.bravisthemes.com/orritech/wp-content/uploads/2024/06/img-contact1.jpg"
            alt="image"
            className="w-full h-[250px] object-cover rounded-t-md"
          />

          <span className="text-lg py-0.5 px-3 bg-blue-500 text-white rounded-full absolute top-4 right-4">
            Send Us Mail
          </span>

          <div className="p-3 flex justify-center items-center content-center">
            <h1 className="text-[20px]  leading-[40px] mt-1.5">
              <a
                className="text-zinc-700"
                href="mailto:blockchaintech@stechgroupbd.com"
              >
                blockchaintech@stechgroupbd.com
              </a>
            </h1>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md relative ">
          <img
            src="https://demo.bravisthemes.com/orritech/wp-content/uploads/2024/06/img-contact2.jpg"
            alt="image"
            className="w-full h-[250px] object-cover rounded-t-md"
          />

          <span className="text-lg py-0.5 px-3 bg-blue-500 text-white rounded-full absolute top-4 right-4">
            Call Us Anytime
          </span>

          <div className="p-3">
            <h1 className="text-[20px] font-bold  leading-[24px] mt-1.5">
              <a
                href="tel:+8809606990123"
                className="block text-lg font-medium text-zinc-700 hover:opacity-75 sm:text-3xl"
              >
                +8809606990123
              </a>
              <a
                href="tel:+8801818773300"
                className="block text-lg font-medium text-zinc-700 hover:opacity-75 sm:text-3xl"
              >
                +8801818773300
              </a>
            </h1>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md relative ">
          <img
            src="https://demo.bravisthemes.com/orritech/wp-content/uploads/2024/06/img-contact3.jpg"
            alt="image"
            className="w-full h-[250px] object-cover rounded-t-md"
          />

          <span className="text-lg py-0.5 px-3 bg-blue-500 text-white rounded-full absolute top-4 right-4">
            Visit Our Office
          </span>

          <div className="p-3">
            <h1 className="text-lg font-bold text-zinc-700 leading-[24px] mt-1.5">
              House- 31, Road- 17, Block- E Banani, <br /> Dhaka- 1213,
              Bangladesh
            </h1>
          </div>
        </div>
      </div>
      <div className="h-screen border-2 border-blue-400 bg-gray-300 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.814299579364!2d90.37271757910156!3d23.792741499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7617fda4ea1%3A0xe097ea5c0a771a32!2sStech%20Group!5e0!3m2!1sen!2sbd!4v1729314014017!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsDeailed;
