import React from 'react';
import Nav from '../Navbar/Navbar/Nav';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();

    const {_id,id,category,name,title,postDate,deadline,salary,applicants,description,location,skills,experienceLevel,employmentType,educationLevel,benefits,companyOverview,applicationProcess,jobBanner,brandImage} = job || {};

    console.log(skills);
    const bg = {
        backgroundImage : `url(${jobBanner})`
    }
    return (
        <div>
            <Nav></Nav>
            <div className='relative h-screen max-w-6xl mx-auto space-y-10'>
                <div style={bg} className='absolute w-full left-0 top-[0%] h-[300px] z-0 opacity-10 bg-cover bg-center '>
                {/* <img src={jobBanner} alt=""  className='w-full h-[200px] object-cover'/> */}
                 <div className='w-full h-full bg-[#101010b7]'></div>
                </div>
                <div className='relative flex gap-6 items-center justify-left px-12'>
                <img src={jobBanner} alt=""  className='w-[500px] h-[300px] object-cover  object-right '/>
                <div className='space-y-4'>
                <h1 className='text-4xl text-black font-bold'>{title}</h1>
                     <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                    <img src={brandImage} alt="" className='w-10 h-10 
                    rounded-full'/>
                    <h3 className='text-2xl text-gray-700 font-medium'>{name}</h3>
                    </div>
                    <div>
                     <p>Salary : {salary}</p>
                     <p>Number of applicants : {applicants}</p>
                     </div>
                    </div>
                </div>
                </div>
                <div className='bg-white drop-shadow-sm space-y-6'>
                  <h1 className='text-2xl text-black font-medium'>Get to know {title} job : </h1>
                  <div>
                  <p className='mb-3 text-xl font-medium  text-black'>What is the jobs about?</p>
                  <p>{description}</p>
                  </div>

                  <div className='space-y-4'>
                    <h1 className='text-xl font-medium  text-black'>Required Slills :</h1>
                    <div className='grid grid-cols-6 gap-6'>
                        { skills ?
                            skills?.map((skill, index) =>
                            <div className='bg-blue-50 rounded-md p-4 text-black font-medium' key={index}>{skill}</div>) : <p className='text-center text-black font-bold'>No skills required</p>
                        }

                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;