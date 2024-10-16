import React from "react";

const Header = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-cover bg-center hero-bg"></div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative lg:my-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 mx-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-left">
                Innovative.
                <br />
                Reliable. <br /> Robust.
              </h1>
              <p className="text-xl mb-8 text-gray-300 text-left">
                Empowering businesses with cutting-edge solutions for a digital
                future.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition duration-300 text-center"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 md:pl-12">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold mb-6 text-left">
                  Why Blockchain Technology?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    <span>Lightning-fast Performance</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span>Bank-grade Security</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      ></path>
                    </svg>
                    <span>AI-powered Insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Header;

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import Swiper styles

// import "swiper/css/effect-cards";

// // import required modules

// import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";
// // import Navbar from "../Shared/Navbar/Navbar";
// const Shapes = () => (
//   <>
//     <svg
//       className="absolute bottom-0 left-0"
//       width="335"
//       height="186"
//       viewBox="0 0 335 186"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M327.624 186C331.697 186 335 182.795 335 178.843C335 174.889 331.697 171.686 327.624 171.686L327.624 186ZM99.0264 108.432C99.0264 104.479 95.725 101.274 91.6506 101.274C87.5777 101.274 84.2748 104.479 84.2748 108.432L99.0264 108.432ZM14.7516 7.15719C14.7516 3.20498 11.4488 -1.41429e-05 7.37582 -1.43209e-05C3.30142 -1.4499e-05 -1.40095e-07 3.20498 -3.12851e-07 7.15719L14.7516 7.15719ZM70.8301 92.441C74.9031 92.441 78.206 89.2374 78.206 85.2838C78.206 81.3316 74.9031 78.1266 70.8301 78.1266L70.8301 92.441ZM327.624 171.686L237.363 171.686L237.363 186L327.624 186L327.624 171.686ZM237.363 171.686C227.292 171.686 219.034 163.687 219.034 153.695L204.283 153.695C204.283 171.481 219.031 186 237.363 186L237.363 171.686ZM219.034 153.695C219.034 135.907 204.272 121.392 185.942 121.392L185.942 135.706C196.019 135.706 204.283 143.708 204.283 153.695L219.034 153.695ZM185.942 121.392L180.609 121.392L180.609 135.706L185.942 135.706L185.942 121.392ZM180.609 121.392C162.28 121.392 147.517 135.907 147.517 153.695L162.268 153.695C162.268 143.708 170.534 135.706 180.609 135.706L180.609 121.392ZM147.517 153.695C147.517 163.684 139.253 171.686 129.177 171.686L129.177 186C147.506 186 162.268 171.485 162.268 153.695L147.517 153.695ZM129.177 171.686L123.272 171.686L123.272 186L129.177 186L129.177 171.686ZM123.272 171.686C109.935 171.686 99.0264 161.097 99.0264 147.921L84.2748 147.921C84.2748 168.9 101.682 186 123.272 186L123.272 171.686ZM99.0264 147.921L99.0264 131.902L84.2748 131.902L84.2748 147.921L99.0264 147.921ZM99.0264 131.902L99.0264 108.432L84.2748 108.432L84.2748 131.902L99.0264 131.902ZM-3.12851e-07 7.15719L-1.0331e-06 23.6345L14.7516 23.6345L14.7516 7.15719L-3.12851e-07 7.15719ZM-1.0331e-06 23.6345C-2.69384e-06 61.6278 31.7028 92.441 70.8301 92.441L70.8301 78.1266C39.8664 78.1266 14.7516 53.7377 14.7516 23.6345L-1.0331e-06 23.6345Z"
//         fill="#4175DF"
//         fillOpacity="0.17"
//       />
//     </svg>

//     <svg
//       className="absolute bottom-0 right-0"
//       width="102"
//       height="102"
//       viewBox="0 0 102 102"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M50.9999 102C79.1665 102 102 79.1665 102 51C102 22.8335 79.1665 0 50.9999 0C22.8334 0 0 22.8335 0 51C0 79.1665 22.8334 102 50.9999 102Z"
//         fill="#FF9100"
//         fillOpacity="0.19"
//       />
//     </svg>
//   </>
// );

// const ShapeThree = () => (
//   <svg
//     className="absolute bottom-0 left-0 -z-20 lg:-left-[150px]"
//     width="291"
//     height="168"
//     viewBox="0 0 291 168"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M80.926 5.72087C38.4338 6.50518 4.64517 42.1258 5.44169 85.2796C6.23821 128.433 41.3183 162.781 83.8105 161.997L285.424 158.275"
//       stroke="#34C69F"
//       strokeWidth="10"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const Header = () => {
//   return (
//     <div>
{
  /* <Navbar /> */
}
{
  /* <header className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden">
        <Shapes />

        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-9 lg:col-span-7 text-center lg:text-start">
              <div className="relative mb-4 pb-6">
                <div
                  className="absolute -top-[50vw] -right-[100vw] bottom-0 h-1/2 bg-center bg-repeat opacity-[.04] -z-10"
                  style={{
                    backgroundImage:
                      "url(https://cdn.easyfrontend.com/pictures/pricing/pricing_12.png)",
                  }}
                />
                <h2 className="text-3xl font-bold leading-tight tracking-wide lg:text-7xl mb-2">
                  Let's Reveal Something New!
                </h2>
              </div>
              <div className="max-w-3xl">
                <p className="text-[17px] leading-relaxed opacity-80 mb-12">
                  An activity that requires a person's mental or physical effort
                  is work.If a person is trained for a certain type of job, they
                  may have a job or profession which suits.
                </p>
              </div>
              <button className="py-3 px-8 font-medium text-white bg-blue-600 hover:bg-opacity-90 rounded-full">
                Schedule a free session
              </button>
            </div>
            <div className="col-span-12 lg:col-span-5 relative text-center">
              <div className="bg-slate-100 dark:bg-slate-800 absolute top-0 left-24 right-0 bottom-0 h-full max-w-[390px] rounded-[390px] -z-10 lg:-left-12" />
              <ShapeThree />

              <div>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                {/* <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>0</SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="hero min-h-screen"
                      style={{
                        backgroundImage:
                          "url(https://i.ibb.co.com/4t8Fjgk/794494e5-dcf5-4ff5-95aa-ad23d971d599-1.jpg)",
                      }}
                    >
                      <div className="hero-overlay bg-opacity-60"></div>
                      <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                          <h1 className="mb-5 text-5xl font-bold">
                            Hello there
                          </h1>
                          <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                          </p>
                          <button className="btn btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="hero min-h-screen"
                      style={{
                        backgroundImage:
                          "url(https://i.ibb.co.com/5G37D7N/a27e6f9a-6966-4438-b0b4-eba28f114b9b-1.jpg)",
                      }}
                    >
                      <div className="hero-overlay bg-opacity-60"></div>
                      <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                          <h1 className="mb-5 text-5xl font-bold">
                            Hello there
                          </h1>
                          <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                          </p>
                          <button className="btn btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper> */
}
{
  /* </div>
            </div>
          </div>
        </div>
      </header> */
}

//     </div>
//   );
// };

// export default Header;

{
  /* <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/p3BcMCw/6256a369-10d8-4178-9787-e3f02f261259-1.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero  min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl text-white font-bold">
                Box Office News!
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div> */
}
