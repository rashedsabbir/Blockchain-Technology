import React from "react";

const MoreAboutUsSubheader = () => {
  return (
    <div>
      <section
        className="ezy__sheader1 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white bg-center bg-no-repeat bg-cover md:mx-32 mx-4 my-12 rounded-xl"
        style={{
          backgroundImage: "url('./SubHeader bg.jpg')",
        }}
      >
        <div className="py-14 md:py-24 relative">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col gap-4 md:flex-row justify-evenly md:mx-12 mx-4 items-center">
              <div className="">
                <div className=" text-left ">
                  <h1 className="text-[35px] leading-none md:text-5xl font-bold mb-0 text-white pb-4">
                    Have a project in mind?
                  </h1>
                  <h1 className="text-[35px] leading-none md:text-4xl font-bold mb-0 text-white italic font-serif">
                    Let’s talk to us
                  </h1>
                </div>
              </div>

              <button className="px-6 z-10  h-16 py-4 bg-rose-600 rounded-md text-white relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl border-none">
                Know More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreAboutUsSubheader;
