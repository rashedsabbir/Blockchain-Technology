import React from "react";

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
                Contact Us
              </h1>
              <p className="text-xl leading-snug opacity-75 mt-6">
                <a href="/">Home</a> {">"} About Us
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsDetailed;
