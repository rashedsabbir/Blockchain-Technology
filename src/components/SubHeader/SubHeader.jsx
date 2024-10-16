import React from "react";

const Shapes = () => {
  return (
    <>
      <svg
        className="absolute right-[300px] bottom-16 hidden md:block text-gray-100 dark:text-gray-700"
        width="104"
        height="104"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="52" cy="52" r="52" fill="currentColor" />
      </svg>
      <svg
        className="absolute bottom-0 right-0 hidden md:block text-gray-100 dark:text-gray-700"
        width="242"
        height="164"
        viewBox="0 0 242 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="165.5"
          cy="165.5"
          r="150.5"
          stroke="currentColor"
          strokeWidth="30"
        />
      </svg>
    </>
  );
};

const SubHeader = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100">
      <img
        className="absolute top-0 left-96 right-100 h-full w-50 object-cover object-center  opacity-30"
        src="/Blockchain tech logo.png"
      />

      <div className="bg-white/60 relative mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-12 backdrop-blur-md sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h2 className="-mx-4 px-4 pt-4 pb-6 text-3xl text-blue-600 sm:text-4xl xl:text-5xl">
          Our <span className="font-bold">Growth</span>
        </h2>

        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-y-4 gap-x-8 text-center sm:mt-12 sm:text-left md:grid-cols-3">
          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              25M
            </p>
            <p className="relative mt-5 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores doloremque vel
            </p>
          </div>

          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              51%
            </p>
            <p className="relative mt-5 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores doloremque vel
            </p>
          </div>

          <div className="bg-white/10 relative mb-3 rounded-3xl border px-12 py-10 text-left shadow backdrop-blur-lg lg:px-12">
            <p className="relative text-3xl font-black text-blue-600 sm:text-5xl">
              8529+
            </p>
            <p className="relative mt-5 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores doloremque vel
            </p>
          </div>
        </div>
      </div>
    </section>

    // <section className="ezy__sheader1 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
    //   <div className="py-14 md:py-24 relative">
    //     <Shapes />
    //     <div className="container px-4 mx-auto">
    //       <div className="grid grid-cols-12">
    //         <div className="col-span-12 md:col-span-8">
    //           <p className="text-xl opacity-80 mb-4">Home / About Us</p>
    //           <h1 className="text-[35px] leading-none md:text-6xl font-bold mb-0">
    //             Let's reveal something new!
    //           </h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-row gap-2">
    //     <div className="border-b-2 border-gray-100 flex items-center justify-center lg:w-[930px]"></div>
    //     <p>JOIN THE 500+ COMPANIES TRUSTING ORRITECH</p>
    //     <div className="border-b-2 border-gray-100 flex items-center justify-center lg:w-[930px]"></div>
    //   </div>
    // </section>
  );
};

export default SubHeader;
