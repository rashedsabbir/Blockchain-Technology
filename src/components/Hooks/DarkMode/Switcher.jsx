// Filename - Components/Switcher.js

import { useEffect, useState } from "react";

export default function Switcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved user preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Save the user's preference to local storage
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.className = theme; // Sets the theme class on the root element
    localStorage.setItem("theme", theme); // Saves the theme to local storage
  }, [isDarkMode]);

  return (
    <>
      <label className="inline-flex items-center relative">
        <input
          className="peer hidden"
          id="toggle"
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div
          className={`relative w-[70px] h-[30px] lg:w-[110px] lg:h-[50px] ${
            isDarkMode ? "bg-zinc-500" : "bg-white"
          } rounded-full after:absolute after:content-[''] after:w-[26px] after:h-[26px] after:lg:w-[40px] after:lg:h-[40px] 
          after:bg-gradient-to-r from-orange-500 to-yellow-400 
          peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 
          after:rounded-full after:top-[2px] after:left-[7px] after:lg:top-[5px] after:lg:left-[3px] 
          active:after:w-[38px] peer-checked:after:left-[80%] 
          peer-checked:after:translate-x-[-72%] peer-checked:after:lg:left-[80%] 
          peer-checked:after:lg:translate-x-[-55%] shadow-lg duration-300 after:duration-300 after:shadow-md`}
        ></div>
        <svg
          height="0"
          width="100"
          viewBox="0 0 24 24"
          className={`absolute w-5 h-5 md:w-6 md:h-6 left-[10px] ${
            isDarkMode ? "opacity-6" : "fill-white"
          }`}
        >
          <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z" />
        </svg>
        <svg
          height="512"
          width="512"
          viewBox="0 0 24 24"
          className={`absolute w-5 h-5 md:w-6 md:h-6 right-[10px] ${
            isDarkMode ? "fill-white" : "opacity-60"
          }`}
        >
          <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z" />
        </svg>
      </label>
    </>
  );
}
