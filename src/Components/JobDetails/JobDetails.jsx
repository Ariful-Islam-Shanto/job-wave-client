import React, { useContext } from 'react';
import Nav from '../Navbar/Navbar/Nav';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Auth Provider/AuthProvider';

const JobDetails = () => {
    const {user} = useContext(AuthContext);
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

                <div className='relative flex gap-6 items-center justify-between px-12'>
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

                {/* //? Modal */}
                <div>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-lime-500 text-gray-50" onClick={()=>document.getElementById('my_modal_5').showModal()}>Apply Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:w-96 h-full bg-transparent backdrop-blur-2xl p-10">
          
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 text-center antialiased">
            Sign Up
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 text-center antialiased">
            Enter your details to register.
          </p>
            <div className="mb-4 h-full flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input type="text" name="name" defaultValue={user?.displayName}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
            
              <div className="relative h-11 w-full min-w-[200px]">
                <input type="text" name="email" defaultValue={user?.email}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
        
              <div className="relative h-11 w-full min-w-[200px]">
                <input type="text" name="photo"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Resume Link
                </label>
              </div>
            </div>
           
            <button
              className="mt-6 block w-full select-none rounded-lg bg-[#0146b1] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Submit
            </button>
          </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-red-600 text-white border-none">Close</button>
      </form>
    </div>
  </div>
</dialog>
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