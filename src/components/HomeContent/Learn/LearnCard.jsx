import React from "react";
import Linka from "../../extras/Linka";

const LearnCard = ({ title, image, description, link, linktext }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-xl">
        <div>
          <img className="rounded-t-xl w-total" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-5 items-start px-10 pt-5 pb-5">
          <h4 className="font-bold text-2xl">{title}</h4>
          <p>{description}</p>
          <Linka links={link} text={linktext} />
        </div>
      </div>
    </div>
  );
};

export default LearnCard;
