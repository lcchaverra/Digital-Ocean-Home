import React from "react";
import MainBanner from "./MainBanner";
import DiscountServices from "./DiscountServices";
import BusinessesSection from "./BusinessesSection";
import EcomerceBanner from "./Ecomercebanner";
import BenefitsSection from "./BenefitsSection";
import CloudSection from "./CloudSection";
import Linka from "../extras/Linka";
import LearnSection from "./LearnSection";
import StartSection from "./StartSection";

const MainSection = () => {
  return (
    <div>
      <MainBanner />
      <DiscountServices />
      <BusinessesSection />
      <EcomerceBanner />
      <BenefitsSection />
      <CloudSection />
      <LearnSection />
      <StartSection />

      <div className="bg-do-blue-light w-full h-142">
        <div className="container mx-auto">



        {/* Listado de Servicios */}
          <div className="grid grid-cols-5 gap-10 px-10 pt-36 text-white">
            {/* Columna 1 */}
              <div className="flex flex-col gap-5">
                <h5 className="font-bold text-xl">Company</h5>
                <ul className="flex flex-col gap-y-2">
                  <li>About</li>
                  <li>Leadership</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Customers</li>
                  <li>Partners</li>
                  <li>Channel Partners</li>
                  <li>Referral Program</li>
                  <li>Affiliate Program</li>
                  <li>Press</li>
                  <li>Legal</li>
                  <li>Security</li>
                  <li>Investor Relations</li>
                  <li>DO Impact</li>
                </ul>
              </div>
                          {/* Columna 2 */}
                          <div className="flex flex-col gap-5">
                <h5 className="font-bold text-xl">Products</h5>
                <ul className="flex flex-col gap-y-2">
                  <li>About</li>
                  <li>Leadership</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Customers</li>
                  <li>Partners</li>
                  <li>Channel Partners</li>
                  <li>Referral Program</li>
                  <li>Affiliate Program</li>
                  <li>Press</li>
                  <li>Legal</li>
                  <li>Security</li>
                  <li>Investor Relations</li>
                  <li>DO Impact</li>
                  <li>Security</li>
                  <li>Investor Relations</li>
                  <li>DO Impact</li>
                </ul>
              </div>

            {/* Columna 3 */}
            <div className="flex flex-col gap-5">
                <h5 className="font-bold text-xl">Community</h5>
                <ul className="flex flex-col gap-y-2">
                  <li>About</li>
                  <li>Leadership</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Customers</li>
                  <li>Partners</li>
                  <li>Channel Partners</li>
                  <li>Referral Program</li>
                  <li>Affiliate Program</li>
                  <li>Press</li>
                  <li>Legal</li>
                  <li>Security</li>
                  <li>Investor Relations</li>
                </ul>
              </div>

                          {/* Columna 4 */}
                          <div className="flex flex-col gap-5">
                <h5 className="font-bold text-xl">Solutions</h5>
                <ul className="flex flex-col gap-y-2">
                  <li>About</li>
                  <li>Leadership</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Customers</li>
                  <li>Partners</li>
                  <li>Channel Partners</li>
                  <li>Referral Program</li>
                  <li>Affiliate Program</li>
                
                </ul>
              </div>

                          {/* Columna 5 */}
                          <div className="flex flex-col gap-5">
                <h5 className="font-bold text-xl">Contact</h5>
                <ul className="flex flex-col gap-y-2">
                  <li>About</li>
                  <li>Leadership</li>
                  <li>Blog</li>
                  <li>Careers</li>
                  <li>Customers</li>
                </ul>
              </div>



          </div>


          {/* divisor */}
          <div className="flex text-gray-400"> 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          </div>


        {/* Redes scoailes */}
      

        <div className="flex justify-between pt-10">

        <div className="flex gap-5 items-center">
          <img src="https://www.digitalocean.com/_next/static/media/do-logo-digitized.e5014337.svg" alt="" />
          <span className="text-white">© 2023 DigitalOcean, LLC. All rights reserved.</span>
        </div>


        <div className="flex gap-x-4 items-center">
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialTwitch.a40b5940.svg" alt="Logo de Red social" /></a>
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialTwitter.26ed7e61.svg" alt="Logo de Red social" /></a>
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialFb.c716d8b2.svg" alt="Logo de Red social" /></a>
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialInstagram.5fb5ecbd.svg" alt="Logo de Red social" /></a>
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialYoutube.3ea36203.svg" alt="Logo de Red social" /></a>
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialLinkedin.7662d59b.svg" alt="Logo de Red social" /></a>
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialDev.c2375b02.svg" alt="Logo de Red social" /></a>
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialGlassdoor.b7323088.svg" alt="Logo de Red social" /></a>
        <a href=""><img src="https://www.digitalocean.com/_next/static/media/socialBuiltinnyc.39adf06d.svg" alt="Logo de Red social" /></a>
        </div>

        </div>


        </div>
        {/* Imagenes */}
        <div className="flex justify-between items-end pt-5">
        <img src="https://www.digitalocean.com/_next/static/media/seaFloorLeft.53f70537.svg" alt="" />
        <img src="https://www.digitalocean.com/_next/static/media/seaFloorMiddle.b8dc47b6.svg" alt="" />
        <img src="https://www.digitalocean.com/_next/static/media/seaFloorRight.9cccc865.svg" alt="" />
        </div>


      </div>

      
    </div>
  );
};

export default MainSection;
