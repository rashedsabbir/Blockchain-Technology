import React from "react";

const Clients = () => {
  const clientLogos = [
    {
      logo: "./Artboard 1 copy.png",
      alt: "",
      description:
        "It’s easier to reach your savings goals when you have the right savings account when you have the right.",
    },
    {
      logo: "./hire-bd.jpg",
      alt: "",
      description:
        "Take a look and find the right one for you.when you have right savings account when you have the right.",
    },
    {
      logo: "./colorful-world-logo.png",
      alt: "",
      description:
        "It’s easier to reach your savings goals when you have the right savings account when you have the right.",
    },
  ];

  return (
    <div>
      <section className="ezy__clients17 light py-14 pb-12 bg-white dark:bg-[#0b1727] text-zinc-700 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 mb-4 mb-md-5">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <button className="overflow-hidden relative w-32 p-2 h-12 bg-zinc-700 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                Our Clients
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                  Join Us
                </span>
              </button>
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
                      className=" mx-auto group-hover:grayscale grayscale-0"
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
    </div>
  );
};

export default Clients;
