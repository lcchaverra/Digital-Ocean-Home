import React from 'react';
import useFetch from "./useFetch";
import Linka from "../extras/Linka";
import CloudCard from "./Cloud/CloudCard";

const CloudServicesList = [
  {
    image:
      "https://www.digitalocean.com/_next/static/media/cloudways-logo.4b393732.svg",
    title: "Managed hosting",
    description:
      "Cloudways is a fully-managed cloud hosting solution built with simplicity, flexibility, and performance in mind.",
    link: "/",
    linktext: "Learn more",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/droplets-icon.b6e4bb89.svg",
    title: "Virtual machines",
    description:
      "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
    link: "/",
    linktext: "Learn more",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/kubernetes-icon.bab9c67d.svg",
    title: "Kubernetes",
    description:
      "DigitalOcean Kubernetes is a managed solution that is easy to scale and includes a 99.5% SLA for HA and free control plane.",
    link: "/",
    linktext: "Learn more",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/app-platform-icon.699988d5.svg",
    title: "App Platform",
    description:
      "Build and deploy apps without managing infrastructure with DigitalOcean’s Platform as a Service and serverless solutions.",
    link: "/",
    linktext: "Learn more",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/managed-databases-icon.34e236c6.svg",
    title: "Managed databases",
    description:
      "Managed MongoDB, MySQL, PostgreSQL, and Redis let you focus on your apps while we update and scale your databases.",
    link: "/",
    linktext: "Learn more",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/spaces-storage-icon.847a812f.svg",
    title: "Storage",
    description:
      "DigitalOcean Spaces object storage and Volumes block storage are business-ready storage solutions.",
    link: "/",
    linktext: "Learn more",
  },
];

const CloudSection = () => {
  const [ data, loading ] = useFetch("https://randomuser.me/api/");
  
  // console.log(typeof(myArray), myArray);

  return (
    <div>
      <div className="container mx-auto">
        <div className="py-20 ml-34 px-72">
          <h3 className="text-do-blue-dark font-bold text-4xl text-center">
            A cloud for your entire journey
          </h3>
          <p className="pt-10 text-center text-gray-700">
            DigitalOcean’s suite of products is designed to be with you on every
            step of your journey, whether you want to do it yourself or get help
            from the experts.
          </p>
          <Linka link="/" text="See all products" />
        </div>

        {/* Grilla de Servicios Cloud */}
        <div className="grid gap-8 grid-cols-3 grid-rows-2 py-10">
          {CloudServicesList.map((clouditem) => (
            <CloudCard
              image={clouditem.image}
              title={clouditem.title}
              description={clouditem.description}
              link={clouditem.link}
              linktext={clouditem.linktext}
            />
          ))}
          {/* Probando Conexion a una api gratis de generacion de usuarios random */}
            {/* <h5>Api List</h5>
            {
              loading? <p>Cargando...</p>:
              data && Array.isArray(data.results) && data.results.length > 0 
              ?data.results.map((user)=> <li>{user.name.first}</li>)
              :(<p>No data to display</p>)
            } */}
        </div>
      </div>
    </div>
  );
};

export default CloudSection;
