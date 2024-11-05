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
      <section className="ezy__clients17 light pb-12 bg-white dark:bg-[#0b1727] text-zinc-700 dark:text-white">
        <div className="container px-4">
          <div className="grid grid-cols-12 mb-4 mb-md-5">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                Our Clients
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
