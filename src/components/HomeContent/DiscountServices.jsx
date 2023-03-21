import React from "react";

const DiscountServices = () => {
  return (
    <div>
      <div className="bg-gray-100 h-96">
        <div className="container flex justify-between items-center gap-6 p-20 ">
          <div className="p-10">
            <h3 className="text-do-blue-light font-extrabold text-4xl">#1</h3>
            <p className="text-gray-500">
              In IaaS usability, VPS for SMBs, & SMB Hosting{" >"}
              <span className="text-do-blue-light">on G2</span>
            </p>
          </div>

          <div className="p-10">
            <h3 className="text-do-blue-light font-extrabold text-4xl">15</h3>
            <p className="text-gray-500">Globally distributed datacenters</p>
          </div>

          <div className="p-10">
            <h3 className="text-do-blue-light font-extrabold text-4xl">
              99.99%
            </h3>
            <p className="text-gray-500">
              Uptime SLA for Droplets and Volumes block storage
            </p>
          </div>

          <div className="p-10">
            <h3 className="text-do-blue-light font-extrabold text-4xl">600k</h3>
            <p className="text-gray-500">
              Customers building with DigitalOcean
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountServices;
