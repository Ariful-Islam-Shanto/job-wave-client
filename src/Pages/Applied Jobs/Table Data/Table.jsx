import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Auth Provider/AuthProvider';
import { FaUser } from 'react-icons/fa6';

const Table = ({job}) => {
    const navigate = useNavigate();
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
                    {user.photoURL ?
                  <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" /> :
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
           
          </td>
          <td>
            {postDate}
            <br/> to
            <span className="badge badge-ghost badge-sm">{deadline}</span>
          </td>
          <td>{salary}</td>
          <th className="flex flex-col items-center justify-center">
            {/* <button onClick={() => {
               navigate(`/details/${_id}`)
            }} className="btn btn-ghost btn-xs">Details</button>  */}
            {applicants}
          </th>
        </tr>
       
      </tbody>


    );
};

export default Table;