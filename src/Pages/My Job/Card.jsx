import React, { useContext } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { FaUser } from 'react-icons/fa6'

const Card = ({job}) => {

    const {user} = useContext(AuthContext);

    const {_id,id,category,name,title,postDate,deadline,salary,applicants,description,location, jobBanner, brandImage} = job || {}
  return (
    
      <tbody>
        {/* row 1 */}
        <tr className="space-y-6">
          
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    {user ?
                  <img src={user?.email} alt="Avatar Tailwind CSS Component" /> :
                  <FaUser className="text-xl h-full w-full"></FaUser>
                    }
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm opacity-50">{location}</div>
              </div>
            </div>
          </td>
          <td>
            {title}
            <br/>
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>
            {postDate}
            <br/> to
            <span className="badge badge-ghost badge-sm">{deadline}</span>
          </td>
          <td>{salary}</td>
          <th className="flex flex-col items-center justify-center">
            <button className="btn btn-ghost btn-xs">Update</button>
            <button className="btn btn-ghost btn-xs">Delete</button>
          </th>
        </tr>
       
      </tbody>
      

  );
};

export default Card;
