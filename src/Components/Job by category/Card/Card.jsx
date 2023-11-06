import React from "react";

const Card = ({job}) => {
    const {_id,id,category,name,title,postDate,deadline,salary,applicants,description,location,skills,experienceLevel,employmentType,educationLevel,benefits,companyOverview,applicationProcess,companyWebsite, brandImage} = job || {};
  return (
    <div className="">
    <div className="p-10 drop-shadow-sm border space-y-6">
      <figure className="flex items-center justify-between">
       <div className="w-8 h-8 rounded-full">
       <img
          src={brandImage}
          alt=""
          className="w-full h-full object-cover"
        />
       </div>
        <button className="border-[#4640DE] border-2 rounded-sm px-3 py-1 text-[#4640DE] text-xs">{category}</button>
      </figure>
      <div className="flex flex-col flex-grow items-left justify-between space-y-2">
        <h2 className="text-md  font-bold">{title}</h2>
        <p className="text-gray-600 text-sm flex-grow">{name} : {location}</p>
        <div className="card-actions flex-grow">
          <button className=" text-xs text-white bg-[#4640DE] px-3 py-2">View details</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
