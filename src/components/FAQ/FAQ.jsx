import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [bgAccording, setBgAccording] = useState(null);

  // according data
  const accordingData = [
    {
      title: "What is custom software development?",
      description:
        "Custom software development is the process of designing and building software applications tailored specifically to meet the unique needs of your business. It allows for scalability, flexibility, and more control over your software solutions.",
    },
    {
      title: "What is mobile app development?",
      description:
        "Mobile app development involves the creation of software applications for mobile devices like smartphones and tablets. These apps can be designed for specific platforms (iOS, Android) and can help your business reach customers through mobile interfaces.",
    },
    {
      title: "How can IT consulting help my business?",
      description: `IT consulting can help optimize your technology infrastructure, improve system efficiency, and provide strategic advice to align your IT resources with your business goals. This can lead to cost savings, better performance, and enhanced cybersecurity.`,
    },

    {
      title: `What are cybersecurity audits?`,
      description: `Cybersecurity audits are comprehensive reviews of your organization's security systems, practices, and policies. These audits identify vulnerabilities, assess risks, and ensure compliance with security standards to protect your data and systems from cyber threats.`,
    },

    {
      title: `How do you optimize SEO for websites?`,
      description: `SEO optimization involves improving your website's structure, content, and technical aspects to rank higher on search engine results. It includes keyword research, on-page optimization, link building, and ensuring your site is mobile-friendly and fast-loading.`,
    },
  ];

  const handlebgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

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
                FAQ
              </h1>
              <p className="text-xl leading-snug opacity-75 mt-6">
                <a href="/">Home</a> {">"} FAQ
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-12 m-12 justify-center items-center">
        <div className="card md:w-2/3 lg:w-52 flex flex-col items-center ">
          <div className="p-4 ">
            <div className="rounded-full animate-ping">
              <svg
                className="text-center"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
              >
                <path
                  d="M0 0 C4.8846525 2.26787438 7.73212562 5.1153475 10 10 C10.75381535 15.5997712 10.77303575 20.33499991 8.375 25.5 C3.80134327 30.3143755 0.6912538 32.25156236 -6 32.5 C-12.6912538 32.25156236 -15.80134327 30.3143755 -20.375 25.5 C-22.77303575 20.33499991 -22.75381535 15.5997712 -22 10 C-17.52212837 0.3553534 -9.85292056 -1.32635469 0 0 Z "
                  fill="#2296F3"
                  transform="translate(22,0)"
                />
                <path
                  d="M0 0 C1.98 0 3.96 0 6 0 C6.33 2.31 6.66 4.62 7 7 C6.34 7 5.68 7 5 7 C6.65 8.65 8.3 10.3 10 12 C10.99 11.67 11.98 11.34 13 11 C15.6875 11.4375 15.6875 11.4375 18 12 C18 13.98 18 15.96 18 18 C12.66689031 18.50791521 10.13879419 17.34625913 6 14 C1.2798645 9.3847564 0.32900374 6.36073905 0 0 Z "
                  fill="#EAF2F9"
                  transform="translate(7,7)"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-xl font-bold pb-2">Have Any Questions?</h2>
          <p>
            <a
              href="tel:+8809606990123"
              className="block text-xl font-medium text-gray-100 hover:opacity-75 "
            >
              +8809606990123
            </a>
          </p>
        </div>
        <div className="flex gap-3 flex-col ">
          {accordingData?.map((according, index) => (
            <article key={index} className="bg-[#e5eaf2] rounded w-96">
              <div
                className="flex gap-2 cursor-pointer items-center justify-between bg-gray-600 p-3 rounded"
                onClick={() => handlebgAccording(index)}
              >
                <h2 className={` text-[#ffffff] font-[600] text-[1.2rem]`}>
                  {according.title}
                </h2>
                <svg
                  className="fill-[#ffffff] shrink-0 ml-8"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      bgAccording === index && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      bgAccording === index && "!rotate-180"
                    }`}
                  />
                </svg>
              </div>
              <div
                className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-gray-100 ${
                  bgAccording === index
                    ? "grid-rows-[1fr] opacity-100 p-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="text-[#424242] text-[0.9rem] overflow-hidden text-justify">
                  {according.description}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
