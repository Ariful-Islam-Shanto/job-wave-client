import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Auth Provider/AuthProvider";
import toast from "react-hot-toast";

const Card = ({job}) => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
    
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
        <button className="border-[#0146B1] border-2 rounded-sm px-3 py-1 text-[#4640DE] text-xs">{category}</button>
      </figure>
      <div className="flex flex-col flex-grow items-left justify-between space-y-2">
        <h2 className="font-bold flex items-center justify-between">
          <span className="text-md">{title} </span>
          <span className="text-sm">Salary: {salary}</span>
        </h2>
        <p className="text-gray-600 text-sm flex-grow">{name} : {location} </p>
        <p className="text-xs text-gray-600 flex items-center justify-between"><span>Post Date: {postDate}</span> <span>Deadline : {deadline}</span></p>
        <div className="card-actions flex-grow flex items-center justify-between">
          <button onClick={() => {
              
                  navigate(`/details/${_id}`);
              
          }} className=" text-xs text-white bg-[#0146B1] px-3 py-2">View details</button>
          <div className="badge bg-lime-200">Applied : {applicants}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
