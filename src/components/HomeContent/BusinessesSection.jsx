import React from "react";

const BusinessesSection = () => {
  return (
    <div>
      <div className="h-136 bg-do-gray-light">
        <div className="container mx-auto py-28">
          <h3 className="mx-14 px-48 text-4xl font-bold text-do-blue-dark text-center">
            How real businesses use DigitalOcean to accelerate their growth
          </h3>

          <div className="p-10 z-back">
            <img
              className="rounded-2xl ml-135 z-back w-1/2"
              src="https://www.digitalocean.com/_next/static/media/loot-tv-card.f4fc509a.png"
              alt=""
            />
          </div>

          <div>
            <div className="z-20 mx-5 -my-96 bg-do-blue-light w-2/4 h-96 rounded-3xl">
              <div className=" p-5 flex justify-between">
                <img
                  src="https://www.digitalocean.com/_next/static/media/loot-tv-logo.980c0d33.svg"
                  alt=""
                />

                <div className="flex gap-3">
                  <button className="text-white px-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-150 ease-in">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>

                  <button className="text-white px-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-150 ease-in">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-white flex flex-col justify-between gap-8 p-7">
                <h3 className="font-bold text-xl">
                  Loot.tv uses Managed Kubernetes and Spaces Object Storage to
                  grow their streaming business.
                </h3>

                <p>
                  “Cloud providers love gouging on bandwidth for seemingly no
                  reason. The only reason that Loot.tv can exist is because of
                  the very cheap overage [bandwidth charges] on DigitalOcean
                  Spaces.”
                </p>

                <span>—Joshua Verdehem, Co-Founder, Loot.tv</span>

                <a className="font-medium" href="/">
                  Read the case study
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessesSection;
