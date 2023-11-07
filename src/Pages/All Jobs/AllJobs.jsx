import React, { useState } from "react";
import Nav from "../../Components/Navbar/Navbar/Nav";
import { useLoaderData } from "react-router-dom";
import Table from "./Table/Table";

const AllJobs = () => {
  const data = useLoaderData();
  const [jobs, setMyJobs] = useState(data || []);

  console.log(jobs);
  return (
    <div>
      <Nav></Nav>
      <div className="text-6xl max-w-6xl mx-auto">
        <h1 className="text-4xl text-black font-bold">All Jobs</h1>

        {/* //? Search Input Field */}
        <div className="bg-white rounded-md p-4 flex items-center justify-start gap-3  w-2/3">
          <input type="text" placeholder="Search by title" className="h- text-lg px-5 py-2 w-3/4 border" />
          <button
            onClick={() => {}}
            className="px-4 py-2 border-none rounded-md text-lg bg-[#0146B1] w-1/4 text-white"
          >
            Search
          </button>
        </div>
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
            {jobs?.map((job) => (
              <Table key={job._id} job={job}></Table>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
