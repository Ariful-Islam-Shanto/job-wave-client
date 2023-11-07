import React, { useState } from "react";
import Nav from "../../Components/Navbar/Navbar/Nav";
import { useLoaderData } from "react-router-dom";
import Table from "./Table/Table";
import { useQuery } from "@tanstack/react-query";

const AllJobs = () => {
  const loderData = useLoaderData();
  const [jobs, setMyJobs] = useState([]);
  const [title, setTitle] = useState('');

  const {data : jobsData, isLoading, isError, error, refetch } = useQuery({
    queryKey : ['AllJobs'],
    queryFn : async () => {
        const queryData = await fetch(`http://localhost:5000/AllJobs?title=${title}`);
        const result = await queryData.json();
        return result;
    }
  })

  const handleTitle = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get('title');
    console.log(title);
    setTitle(title);
    refetch();
  }

  return (
    <div>
      <Nav></Nav>
      <div className="text-6xl max-w-6xl mx-auto">
        <h1 className="text-4xl text-black font-bold">All Jobs</h1>

        {/* //? Search Input Field */}
        <div className="bg-white rounded-md p-4 flex items-center justify-start gap-3  w-2/3">
            <form onSubmit={handleTitle} className="w-full flex gap-4">
          <input name="title" type="text" placeholder="Search by title" className="h- text-lg px-5 py-2 w-3/4 border" />
          <button
            type="submit"
            className="px-4 py-2 border-none rounded-md text-lg bg-[#0146B1] w-1/4 text-white"
          >
            Search
          </button>
          </form>
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
            {jobsData?.map((job) => (
              <Table key={job._id} job={job}></Table>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
