import React from "react";

const clientLogos = [
  {
    logo: "./Blockchain 256 logo.png",
    alt: "",
    description:
      "It’s easier to reach your savings goals when you have the right savings account when you have the right.",
  },
  {
    logo: "./Blockchain 256 logo.png",
    alt: "",
    description:
      "Take a look and find the right one for you.when you have right savings account when you have the right.",
  },
  {
    logo: "./Blockchain 256 logo.png",
    alt: "",
    description:
      "It’s easier to reach your savings goals when you have the right savings account when you have the right.",
  },
];

const AboutUsDetailed = () => {
  return (
    <div>
      <section
        className="ezy__sheader6 light py-14 md:py-24 text-zinc-700 dark:text-white  overflow-hidden relative z-[1] rounded-2xl"
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
                <a href="/">Home</a> {">"} About Us
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ezy__clients17 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 mb-4 mb-md-5">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <h2 className="text-[32px] font-bold mb-6">
                Companies That Have Already Tried Our Messenger.
              </h2>
              <p className="text-lg leading-relaxed opacity-80 md:px-12">
                It’s easier to reach your savings goals when you have the right
                savings account. Take a look and find the right one for you!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 lg:gap-2 place-content-center justify-items-center">
            {clientLogos.map((client, i) => (
              <div className="col-span-12 lg:col-span-4 mt-8 " key={i}>
                {/* <div className="group text-center duration-300">
                  <div className="shadow-xl px-6 py-6 rounded-md">
                    <img
                      src={client.logo}
                      alt=""
                      className="max-h-[200px] mx-auto grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div> */}
                <div class="group origin-bottom-right duration-500 -rotate-12 hover:-rotate-0 hover:-skew-x-12 skew-x-0 hover:-translate-x-6  hover:translate-y-12">
                  <div class="duration-500 group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center  before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10 group-hover:before:-right-3 group-hover:before:skew-x-12 before:duration-500 group-hover:duration-500">
                    <img
                      src={client.logo}
                      alt=""
                      className="max-h-[100px] mx-auto "
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsDetailed;
