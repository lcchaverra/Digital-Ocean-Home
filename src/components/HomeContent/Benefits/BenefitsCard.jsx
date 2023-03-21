import React from "react";
// import PropsType from "props-type";

const BenefitsCard = ({image,title,description}) => {
  return (
    <div>
      <div className="flex rounded-3xl p-10 bg-db-gray-light w-2/2 h-2/2 shadow-xl gap-5">
        <img src={image} alt="" />
        <div className="flex flex-col gap-3">
          <h4 className="font-medium text-gray-600">{title}</h4>
          <p className="text-gray-500 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCard;
