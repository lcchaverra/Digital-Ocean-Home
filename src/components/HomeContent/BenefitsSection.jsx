import React from "react";
import BenefitsCard from "./Benefits/BenefitsCard";

const BenefitsList = [
  {
    image:
      "https://www.digitalocean.com/_next/static/media/bar-chart.656d9366.png",
    title: "Build and ship faster using simple tools",
    description:
      "All of our products are built with simplicity at their core, so you can spend your time focusing on building apps, not infrastructure.",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/dollar-up-splash.6b8727f3.png",
    title: "Grow profitably with predictable cloud costs",
    description:
      "Our predictable pricing and leading price-to-performance ratio contribute to an ROI of 186%, according to a Forrester study.",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/speech-bubbles.cc4ac392.png",
    title: "Reduce your roadblocks with dedicated support",
    description:
      "Get free, personalized support or upgrade to paid plans to receive dedicated help and faster response times.",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/arrows.5086d9da.png",
    title: "Improve customer experience by building on a reliable platform",
    description:
      "Deliver superior customer experience with our globally distributed platform, minimal downtime, and intuitive products.",
  },
];

const BenefitsSection = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="py-20 ml-34 px-72">
          <h3 className="text-do-blue-dark font-bold text-4xl text-center">
            Benefits to activate the builder in you
          </h3>
          <p className="pt-10 text-center text-gray-700">
            From simple tools and predictable pricing to support designed for
            growing businesses, DigitalOcean's cloud is built to serve the
            unique needs of startups and SMBs.
          </p>
        </div>

        {/* GRilla de Beneficios */}

        <div className="grid gap-4 grid-cols-2 grid-rows-2">
          {BenefitsList.map((benefits) => (
            <BenefitsCard
              image={benefits.image}
              title={benefits.title}
              description={benefits.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
