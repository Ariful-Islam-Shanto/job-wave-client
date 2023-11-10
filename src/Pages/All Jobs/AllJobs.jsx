import React, { useState } from "react";
import Nav from "../../Components/Navbar/Navbar/Nav";
import { useLoaderData } from "react-router-dom";
import Table from "./Table/Table";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";

const AllJobs = () => {
  const loderData = useLoaderData();
  const [jobs, setMyJobs] = useState([]);
  const [title, setTitle] = useState('');

  const {data : jobsData, isLoading, isError, error, refetch } = useQuery({
    queryKey : ['AllJobs'],
    queryFn : async () => {
        const queryData = await fetch(`https://job-wave-server.vercel.app/AllJobs?title=${title}`);
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
      <div className="text-6xl max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h1 className="text-4xl text-black text-center md:text-left lg:text-left xl:text-left font-bold">All Jobs</h1>

        {/* //? Search Input Field */}
        <div className="bg-white rounded-md px-4 md:px-0 lg:px-0 xl:px-0 py-4 md:py-4 lg:py-4 xl:py-4  md:justify-start lg:justify-start xl:justify-center gap-3 w-full md:w-full lg:w-full xl:w-full">
        {/* <div className="w-full px-4 md-px-0 flex items-center  justify-center gap-3 lg:px-0 xl:px-0"> */}
            <form onSubmit={handleTitle} action="" className="flex items-center  justify-center gap-3">
          <input name="title" type="text" placeholder="Search by title" className="h- text-lg px-5 py-2 w-3/4 border rounded-md" />
          <button
            type="submit"
            className="px-4 py-2 border-none rounded-md text-lg bg-[#0146B1] w-1/4 text-white"
          >
            Search
          </button>
          </form>
        </div>
        <div className="overflow-x-scroll">
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
