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
      <section className="ezy__clients17 light py-14 md:py-12 bg-white dark:bg-[#0b1727] text-zinc-700 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 mb-4 mb-md-5">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <h2 className="text-[32px] font-bold mb-6">
                Meet Our Clients & Partners
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8 justify-center mx-6">
            {clientLogos.map((client, i) => (
              <div className=" mt-8 " key={i}>
                <div className="group text-center duration-300">
                  <div className="shadow-xl px-6 py-6 rounded-md">
                    <img
                      src={client.logo}
                      alt=""
                      className="max-h-[200px] mx-auto grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
                {/* <div className="group origin-bottom-right duration-500 -rotate-12 hover:-rotate-0 hover:-skew-x-12 skew-x-0 hover:-translate-x-6  hover:translate-y-12">
                  <div className="duration-500 group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center  before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10 group-hover:before:-right-3 group-hover:before:skew-x-12 before:duration-500 group-hover:duration-500">
                    <img
                      src={client.logo}
                      alt=""
                      className="max-h-[100px] mx-auto "
                    />
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ezy__about11 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 gap-5 justify-center items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="text-center lg:px-20">
                <p className="opacity-75 uppercase">TEMPLATE OF EASYFRONTEND</p>
                <h1 className="text-4xl md:text-7xl leading-tight font-light uppercase tracking-wide">
                  DESIGN & <span className="font-bold">PASSION</span>
                  <span className="inline-flex w-3 h-3 rounded-full bg-blue-600 ml-2"></span>
                </h1>
                <p className="text-xl leading-normal opacity-75 mt-4 mb-6">
                  Completely network collaborative web services via user-centric
                  initiatives. Quickly promote sticky testing procedures
                  collaborator before unique process improvements.
                </p>
                <p className="opacity-50 text-sm lg:mx-12">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, sunt dignissimos veritatis possimus assumenda
                  libero officiis accusamus ipsum blanditiis.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="lg:ml-12">
                <p className="opacity-75 mb-4">
                  <span className="text-[40px] text-blue-600 font-bold">W</span>
                  eb services via user-centric initiatives. Quickly promote
                  sticky testing procedures before unique process improvements.
                  Distinctively engineer innovative information whereas
                  revolutionary process improvements. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Quia enim omnis saepe
                  dolor voluptatum.
                </p>
                <p className="opacity-75 mb-4">
                  Distinctively engineer innovative information whereas
                  revolutionary process improvements. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Quia enim omnis saepe
                  dolor voluptatum. Natus soluta maxime ipsum nam sapiente
                  dignissimos voluptatum totam.
                </p>
                <p className="opacity-75">
                  Completely network collaborative web services via user-centric
                  initiatives. Quickly promote sticky testing procedures before
                  unique process improvements. Distinctively engineer innovative
                  information whereas revolutionary process improvements. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Quia enim
                  omnis saepe dolor voluptatum. Natus soluta maxime ipsum nam
                  sapiente dignissimos voluptatum totam. Ratione atque dolorum
                  nostrum a est voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsDetailed;
