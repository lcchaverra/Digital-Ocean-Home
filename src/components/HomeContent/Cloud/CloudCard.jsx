import React from "react";
import Linka from "../../extras/Linka";

const CloudCard = ({image,title,description,link,linktext}) => {
  return (
    <div>
      <div className="bg-white w-3/3 h-56 rounded-3xl shadow-md">
        {/* Cabecera */}
        <div className=" p-5 flex gap-4">
          <img
            src={image}
            alt=""
          />
          <h4 className="font-bold">{title}</h4>
        </div>
        {/* Contenido */}
        <div className="flex flex-col gap-7 items-start px-7">
          <p className=" text-gray-500">
            {description}
          </p>
          <Linka links={link} text={linktext} />
        </div>
      </div>
    </div>
  );
};

export default CloudCard;
