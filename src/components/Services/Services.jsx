import React from "react";

const services = [
  {
    title: "Software Development",
    description:
      "Build scalable, high-quality software solutions tailored to your business needs.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m10 10l2-2v8"
        />
      </svg>
    ),
  },
  {
    title: "IT Consulting and Strategy",
    description:
      "Expert advice and strategy to align your IT infrastructure with your business goals.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3"
        />
      </svg>
    ),
  },
  {
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with advanced security solutions and risk management.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 8h2.5A1.5 1.5 0 0 1 14 9.5v1a1.5 1.5 0 0 1-1.5 1.5H11h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H10"
        />
      </svg>
    ),
  },
  {
    title: "IT Infrastructure Services",
    description:
      "Reliable and efficient IT infrastructure setup and management for optimal performance.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 8v3a1 1 0 0 0 1 1h3m0-4v8"
        />
      </svg>
    ),
  },
  {
    title: "Digital Marketing Services",
    description:
      "Boost your brand visibility and engagement with tailored digital marketing strategies.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V8h4"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center flex-col py-16 lg:pt-44">
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-100 transition-opacity duration-500 group-hover:opacity-0"></span>

              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    EXPLORE OUR SERVICES
                  </span>
                </div>
              </span>
            </button>
          </div>
          <div>
            <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-gray-800 sm:text-5xl pt-6 px-4">
              We Are{" "}
              <span className="my-1 inline-block border-b-8 border-gray-800 font-bold text-gray-800">
                Committed
              </span>{" "}
              To Provide Best Services{" "}
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-12 pb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden bg-gradient-to-l from-slate-300 to-slate-100  px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12 card-anime"
            >
              <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500 text-white">
                  {service.svg}
                </span>
                <div className="space-y-2 pt-4 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
                  <p className="font-extrabold text-xl">{service.title}</p>
                  <p className="text-base">{service.description}</p>
                </div>
                <div className="pt-6 text-lg font-semibold leading-7">
                  <a href="">
                    <button
                      className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-gray-800 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 hover:border-black rounded-full group"
                      type="submit"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 19"
                        className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                      >
                        <path
                          className="fill-gray-800 group-hover:fill-gray-800"
                          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
