import React from "react";

const MainBanner = () => {
  return (
    <div>
      {/* Container principal */}
      <div className="bg-do-blue-light mx-auto h-128 z-0 relative">
        {/* Titulo */}
        <div className="absolute mx-40 px-20 py-36 z-10">
          <h2 className="text-7xl font-extrabold text-white">
            Dream it. Build it. Grow it.
          </h2>
          <p className="py-6 px-32 font-bold text-white">
            Whatever your “it” is–a SaaS app, website, or eCommerce store–build
            it here.
          </p>

          {/* Iconos de Redes Sociales */}
          <div className="flex gap-8 justify-center items-center">
            {/* Google */}
            <div className="bg-white rounded-xl flex px-6 py-3 font-bold">
              <img
                src="https://doimages.nyc3.digitaloceanspaces.com/google-logo.svg"
                alt=""
              />
              Sing up with google
            </div>

            {/* Github */}
            <div className="bg-white rounded-xl flex px-6 py-3 font-bold">
              <img
                src="https://doimages.nyc3.digitaloceanspaces.com/github-logo.svg"
                alt=""
              />
              Sing up with Github
            </div>

            {/* Email */}
            <div className="bg-do-blue-medium rounded-xl flex px-6 py-3 text-white font-bold">
              Sing up with Email
            </div>
          </div>
        </div>

        {/* Iconos de Fondo */}

        {/* Olas superiores */}
        <img
          className="absolute"
          src="https://www.digitalocean.com/_next/static/media/surface-water.7a73601a.png"
          alt=""
        />

        <div className="flex justify-between pt-60">
          {/* Icono 1 */}
          <div>
            <img
              src="https://www.digitalocean.com/_next/static/media/servers-plant-illustration-left.257ba574.svg"
              alt="servers plant illustration left"
            />
          </div>

          {/* Icono 2 */}
          <div>
            <img
              src="https://www.digitalocean.com/_next/static/media/servers-plant-illustration-right.0fc693fd.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
