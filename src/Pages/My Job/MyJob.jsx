import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth Provider/AuthProvider';
import Nav from '../../Components/Navbar/Navbar/Nav';
import Card from './Card';

const MyJobs = () => {
    const {user, loading} = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([]);

    useEffect(() => {
        if(user) { 
            fetch(`http://localhost:5000/jobCategories?email=${user?.email ? user?.email : ''}`)
        .then(res => res.json())
        .then(data => setMyJobs(data ))
        }
        return;
    }, [user]);
 
    
    console.log(myJobs);
    return (
        <div>
            <Nav></Nav>
            <div className='grid grid-cols-1 drop-shadow-md rounded-sm max-w-4xl mx-auto space-y-6'>
                <div className='w-full bg-lime-50 p-10 rounded-md drop-shadow-sm'>
                    <h1 className='text-4xl text-black text-center uppercase '>My Jobs</h1>
                </div >
            <div className="overflow-x-auto">
    <table className="table ">
      {/* head */}
      <thead>
        <tr>
       
          <th>Name</th>
          <th>Job</th>
          <th>Posted Date & Deadline</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
                { user &&
                    myJobs?.map(job => <Card key={job._id} job={job}></Card>)
                }
                   </table>
                   </div>
            </div>


        </div>
    );
};

export default MyJobs;