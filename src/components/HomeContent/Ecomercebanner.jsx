import React from "react";

const Ecomercebanner = () => {
  return (
    <div>
      <div className="container mx-auto h-128 p-20">
        <div className="bg-do-blue-medium h-78 rounded-3xl relative">
          <div className="flex justify-between items-center">
            <div className="flex flex-col text-white p-12 basis-1/2">
              <h3 className="font-bold text-3xl">
                Build eCommerce stores and websites seamlessly with Cloudways
              </h3>
              <p className="pt-5">
                Leave the hassles of running a website to the experts. Sign up
                for managed hosting through Cloudways now and get $100 in free
                credit.
              </p>
            </div>
            <div>
              <img
                className="rounded-3xl z-0"
                src="https://www.digitalocean.com/_next/static/media/lighthouse-clouds-blue.8a1f1a95.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecomercebanner;
