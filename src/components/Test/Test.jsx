import React from "react";
import "./Test.css";

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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
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
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3V8h4"
        />
      </svg>
    ),
  },
];

const Test = () => {
  return (
    <div className="grid grid-cols-3 gap-4 px-12 ">
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative cursor-pointer card-anime overflow-hidden bg-gradient-to-l from-slate-300 to-slate-100 rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12"
        >
          <span className="absolute top-0 left-0 z-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
          <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 transform group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-yellow-500">
              {service.svg}
            </span>
            <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
              <p className="font-medium text-white">{service.title}</p>
              <p>{service.description}</p>
            </div>
            <div className="pt-6 text-lg font-semibold leading-7">
              <p>
                <span className="text-purple-500 transition-all duration-500 group-hover:text-white">
                  Explore Documentation →
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;

// import { useEffect, useState } from "react";

// const data = [
//   {
//     img: "https://img.freepik.com/premium-photo/3d-flat-icon-as-business-team-collaborating-through-cloud-computing-concept-as-vector-illustration-o_980716-409666.jpg?w=826",
//     title: "Custom Software Development",
//     des: "Tailored solutions to meet your business needs.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=2070&auto=format&fit=crop",
//     title: "Expert IT Consulting & Strategy",
//     des: "Guiding you through digital transformation.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1719749990914-a3ba54e6343f?q=80&w=2072&auto=format&fit=crop",
//     title: "Robust Cybersecurity Solutions",
//     des: "Protecting your business from cyber threats.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1467195468637-72eb862bb14e?q=80&w=2071&auto=format&fit=crop",
//     title: "Reliable IT Infrastructure",
//     des: "Building the backbone of your operations.",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1532155297578-a43684be8db8?q=80&w=2071&auto=format&fit=crop",
//     title: "Innovative Digital Marketing",
//     des: "Boosting your online presence and engagement.",
//   },
// ];

// export default function Carousel6() {
//   const [currentSlider, setCurrentSlider] = useState(0);

//   // if you don't want to change the slider automatically then you can just remove the useEffect
//   useEffect(() => {
//     const intervalId = setInterval(
//       () =>
//         setCurrentSlider(
//           currentSlider === data.length - 1 ? 0 : currentSlider + 1
//         ),
//       5000
//     );
//     return () => clearInterval(intervalId);
//   }, [currentSlider]);

//   return (
//     <div className="flex flex-row-reverse justify-between">
//       <div className="h-72 w-full transform overflow-hidden rounded-lg before:bg-black/50 sm:h-96 md:h-[540px] lg:gap-10">
//         {data.map((slide, index) => {
//           const { img, title, des } = slide;
//           return (
//             <div
//               className={`${
//                 index === currentSlider
//                   ? "visible opacity-100"
//                   : "invisible opacity-0"
//               } absolute inset-0 duration-500 ease-linear`}
//               key={`index_${index}`}
//             >
//               <img
//                 src={img}
//                 width="1200"
//                 height="600"
//                 alt={title}
//                 className={`h-full w-full object-cover duration-500 ease-linear ${
//                   index === currentSlider ? "scale-100" : "scale-105"
//                 }`}
//               />
//               <div className="absolute inset-0 flex flex-col bg-black/40 p-5 text-center text-white drop-shadow-lg">
//                 <div className="mb-0 mt-auto rounded-md bg-white/40 p-3 backdrop-blur-3xl">
//                   <div className=" overflow-hidden font-semibold text-[10px] lg:text-xl py-3">
//                     <h1
//                       className={`${
//                         index === currentSlider ? "" : "translate-y-12"
//                       } duration-500 ease-linear`}
//                     >
//                       {title}
//                     </h1>
//                   </div>
//                   <div className="overflow-hidden text-sm md:text-base lg:text-lg">
//                     <p
//                       className={`${
//                         index === currentSlider ? "" : "-translate-y-12"
//                       } duration-500 ease-linear`}
//                     >
//                       {des}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {/* slider container */}
//       {/* <div className="flex flex-col items-center justify-center gap-3 p-2">
//         {data.map((slide, index) => {
//           const { img, title } = slide;
//           return (
//             <img
//               key={index}
//               src={img}
//               width={1200}
//               height={600}
//               className={`h-6 w-10 bg-black/20 sm:h-8 md:h-12 md:w-20 ${
//                 currentSlider === index
//                   ? "opacity-100 ring ring-sky-500"
//                   : "opacity-60"
//               } box-content cursor-pointer rounded-md md:rounded-lg`}
//               alt={title}
//               onClick={() => setCurrentSlider(index)}
//             />
//           );
//         })}
//       </div> */}
//     </div>
//   );
// }
