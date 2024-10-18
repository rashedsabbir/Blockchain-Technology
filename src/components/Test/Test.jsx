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
