import React, { useContext, useEffect, useState } from 'react';
import Nav from '../../Components/Navbar/Navbar/Nav';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Auth Provider/AuthProvider';
import Table from './Table Data/Table';
import useAxios from '../../Hooks/useAxios';

const AppliedJobs = () => {
    const axios = useAxios();
    const [selectedValue, handleSelectChange] = useState('');
    // const loderData = useLoaderData();
    const {user} = useContext(AuthContext);
    const [jobs, setMyJobs] = useState([]);
    const [category, setCategory] = useState('');
  
    // const {data : jobsData, isLoading, isError, error, refetch } = useQuery({
    //   queryKey : ['AllApplied'],
    //   queryFn : async () => {
    //       const queryData = await fetch(`http://localhost:5000/appliedJobs?email=${user.email}&category=${category}`);
    //       const result = await queryData.json();
    //       return result;
    //   }
    // })

    useEffect(() => {
        axios.get(`http://localhost:5000/appliedJobs?email=${user.email}&category=${category}`)
        .then(res => {
            setMyJobs(res.data);
        })
    }, [axios, category, user.email])
  
    const handleCategory = (e) => {
      e.preventDefault();
      let category = e.target.value;
      if(category === 'AllJobs') {
        category = '';
      }
      setCategory(category);
    //   refetch();
    }

    return (
        <div>
    <div>
      <Nav></Nav>
      <div className="text-6xl max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:px-0 lg:px-0 xl:px-0">
        <h1 className="text-4xl text-black font-bold">My Applied Jobs</h1>

        {/* //? Search Input Field */}
        <div className="bg-white drop-shadow-md rounded-md p-4 w-full">
            {/* <form onSubmit={handleTitle} className="w-full flex gap-4">
          <input name="title" type="text" placeholder="Search by title" className="h- text-lg px-5 py-2 w-3/4 border" />
          <button
            type="submit"
            className="px-4 py-2 border-none rounded-md text-lg bg-[#0146B1] w-1/4 text-white"
          >
            Search
          </button>
          </form> */}
           <div className='text-xl'>
      <label>Choose by category:</label>
      <select  value={category} onChange={handleCategory}>
        {/* <option disabled selected value="">Select An Option</option> */}
        <option value="AllJobs">All</option>
        <option value="Remote">Remote</option>
        <option value="OnSite">OnSite</option>
        <option value="Part-Time">Part Time</option>
        <option value="Hybrid">Hybrid</option>
        
      </select>
    </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table max-w-xl">
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
            { jobs.length > 0 && jobs?.map((job) => (
              <Table key={job._id} job={job}></Table>
            ))}
          </table>
        </div>
      </div>
    </div>

        </div>
    );
};

export default AppliedJobs;