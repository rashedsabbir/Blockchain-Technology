import React from "react";
import Clients from "../Clients/Clients";
import MoreAboutUsSubheader from "./MoreAboutUsSubheader";
import { Link } from "react-router-dom";

const AboutUsDetailed = () => {
  return (
    <div>
      <section
        className="ezy__sheader6 light py-14 md:py-12 text-zinc-700 dark:text-white  overflow-hidden relative z-[1] rounded-2xl"
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
                About Us
              </h1>
              <p className="text-xl leading-snug opacity-75 mt-6">
                <Link to="/">Home</Link> {">"} About Us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ezy__about11 light py-14 md:py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 gap-5 justify-center items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="text-center lg:px-20">
                <h1 className="text-4xl md:text-7xl leading-tight font-light uppercase tracking-wide">
                  MISSION & <span className="font-bold">VISION</span>
                  <span className="inline-flex w-3 h-3 rounded-full bg-blue-500 ml-2"></span>
                </h1>
                <p className="text-xl leading-normal opacity-75 mt-4 mb-6 text-justify">
                  At Blockchain Technology, our mission is to empower businesses
                  by providing innovative, customized software solutions and
                  comprehensive IT services that enhance operational efficiency,
                  bolster security, and drive digital transformation. We are
                  committed to delivering exceptional value through our
                  expertise in technology consulting, cybersecurity, and digital
                  marketing, ensuring our clients stay ahead in an ever-evolving
                  digital landscape.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className=" lg:mx-12">
                <p className="opacity-75 mb-4 text-justify">
                  <span className="text-[40px] text-blue-500 font-bold ">
                    O
                  </span>
                  ur vision is to be a leading provider of cutting-edge
                  technology solutions that revolutionize the way businesses
                  operate. We aspire to create a secure, efficient, and
                  interconnected world where organizations can harness the full
                  potential of technology to achieve their goals and foster
                  sustainable growth. Through continuous innovation and a
                  customer-centric approach, we aim to inspire trust and become
                  the partner of choice for businesses seeking to thrive in the
                  digital age.
                </p>
                <p className="opacity-75 mb-4 text-justify">
                  We aspire to create a secure and interconnected world where
                  businesses leverage blockchain technology, artificial
                  intelligence, and data analytics to make informed decisions
                  and drive innovation. By fostering a culture of collaboration,
                  creativity, and continuous learning, we aim to build
                  long-lasting partnerships with our clients, helping them to
                  not only adapt to change but to thrive in it.
                </p>
                <p className="opacity-75 text-justify">
                  Through our commitment to excellence in software development,
                  IT consulting, cybersecurity, and digital marketing, we seek
                  to inspire trust and confidence in our services. Our goal is
                  to contribute to a sustainable and equitable digital
                  ecosystem, where technology serves as a catalyst for growth,
                  enabling businesses to realize their full potential while
                  positively impacting society and the environment. Together, we
                  will shape a future where technology empowers every
                  organization to achieve its vision and mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Clients />
      <MoreAboutUsSubheader />
    </div>
  );
};

export default AboutUsDetailed;
