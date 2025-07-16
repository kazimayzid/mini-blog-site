import React from "react";

export const Home = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="bg-[#0D6F93] w-[99%] h-[98%] rounded-2xl p-5">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-[35px] py-1 px-5 bg-white inline-block rounded-[10px]">
              LOGO
            </p>
          </div>
          <div className="flex gap-x-[50px]">
            <a
              href="#home"
              className="bg-white px-5 py-1 font-semibold text-lg rounded-[6px]"
            >
              Home
            </a>
            <a
              href="#about"
              className="bg-white px-5 py-1 font-semibold text-lg rounded-[6px]"
            >
              About
            </a>
            <a
              href="#settings"
              className="bg-white px-5 py-1 font-semibold text-lg rounded-[6px]"
            >
              Settings
            </a>
          </div>
        </div>
        <div className="mt-[80px] ">
          <div>
            <input type="text" />
          </div>
          <div></div>
        </div>
      </div>
      <script src="./node_modules/flowbite/dist/flowbite.min.js"></script>
    </div>
  );
};
