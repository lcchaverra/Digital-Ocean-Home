import React from "react";
import LearnCard from "./Learn/LearnCard";

const LearnList = [
  {
    image:
      "https://www.digitalocean.com/_next/static/media/digitalocean-docs.26159f78.svg",
    title: "Product documentation",
    description:
      "Learn how to spin up a virtual machine, get started with block storage, and more with in-depth documentation.",
    link: "/",
    linktext: "Learn more",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/boat-storm-lighthouse.4bdddec0.png",
    title: "Business advice",
    description:
      "The Wave is DigitalOcean’s hub for startup and business-focused content on funding, hiring, and scaling.",
    link: "/",
    linktext: "Learn more",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/heart-speech-bubble-asterisk-graphic.6eb0678f.svg",
    title: "Technical expertise",
    description:
      "Visit DigitalOcean’s Community Website and CSS-Tricks to learn from wide range of technical tutorials.",
    link: "/",
    linktext: "Learn more",
  },
];

const LearnSection = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="py-10 ml-34 px-72">
          <h3 className="text-do-blue-dark font-bold text-4xl text-center">
            Learn from the experts
          </h3>
          <p className="pt-5 text-center text-gray-700">
            Whether you want to learn about funding your business, installing
            Linux on Ubuntu, or getting started on DigitalOcean, we have the
            educational resources for you.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 py-10">
          {LearnList.map((learn) => (
            <LearnCard
              image={learn.image}
              title={learn.title}
              description={learn.description}
              link={learn.link}
              linktext={learn.linktext}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
