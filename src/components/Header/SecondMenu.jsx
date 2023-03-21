import React from "react";

const SecondMenu = () => {
  return (
    <>
      <div className="bg-do-blue-dark text-gray-300 py-2 text-sm font-medium font-inter">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center">
            <div>
              <p className="hover:text-gray-50">
                New! Premium CPU-Optimized Droplets are now available. Learn
                more
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>

          <div>
            <a className="pl-3 hover:text-gray-50" href="">
              We're hiring
            </a>
            <a className="pl-3 hover:text-gray-50" href="">
              Blog
            </a>
            <a className="pl-3 hover:text-gray-50" href="">
              Docs
            </a>
            <a className="pl-3 hover:text-gray-50" href="">
              Get Support
            </a>
            <a className="pl-3 hover:text-gray-50" href="">
              Sales
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondMenu;
