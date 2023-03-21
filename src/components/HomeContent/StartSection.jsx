import React from "react";

const StartSection = () => {
  return (
    <div>
      <div className="w-total bg-do-cyan-light h-96">
        <div className="flex flex-col gap-5 justify-center items-center pt-28">
          <h3 className="text-do-blue-dark text-4xl font-extrabold">
            Start building today
          </h3>
          <p className="text-gray-600">
            Sign up now and you'll be up and running on DigitalOcean in just
            minutes.
          </p>
          <a className="bg-white font-bold px-5 py-3 rounded-xl" href="/">
            Sign up to get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
