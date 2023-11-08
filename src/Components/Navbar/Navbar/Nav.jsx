import React, { useContext, useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth Provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa6';


const Nav = () => {
  const {user, logOut} = useContext(AuthContext);
  const [open, setOpen] = useState(false);


  const navigate = useNavigate();


  const handleLogOut = () => {
    logOut() 
    .then(() => {
      toast.success('Successfully logged out');
      navigate('/login');
    })
    .catch((error) => {
    // An error happened.
    console.log(error);
  })

  }
    return (
        <div className=' py-6' >
 <div className="navbar w-full md:px-0 lg:px-0 xl:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to={'/'}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Home</NavLink>
      <NavLink to={'/blog'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Blog</NavLink>
      <NavLink to={'/allJobs'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>All Jobs</NavLink>
      { user && <> 
      <NavLink to={'/addJob'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Add Job</NavLink>
      <NavLink to={'/myJobs'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>My Jobs</NavLink> 
      <NavLink to={'/JobApplied'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Applied Jobs</NavLink> 
      </>
      }
      { !user && <NavLink to={'/register'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Register</NavLink>}
     { !user && <NavLink to={'/login'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Login</NavLink> }
  
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-bold">JobWave</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex lg:gap-6 xl:gap-12 px-1">
      <NavLink to={'/'}  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Home</NavLink>
      <NavLink to={'/blog'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Blog</NavLink>
      <NavLink to={'/allJobs'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>All Jobs</NavLink>
      { user && <> 
      <NavLink to={'/addJob'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Add Job</NavLink>
      <NavLink to={'/myJobs'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>My Jobs</NavLink> 
      <NavLink to={'/JobApplied'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Applied Jobs</NavLink> 
      </>
      }
      { !user && <NavLink to={'/register'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Register</NavLink>}
     { !user && <NavLink to={'/login'} className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#0146B1]" : ""
  }>Login</NavLink> }
    </ul>
  </div>
  
  
  <div className="navbar-end">
    {
      user ? <> 
      <div className='relative flex items-center justify-center gap-3 mr-4'>
      {user && <> <div className="avatar">
    <div onClick={() => {
          setOpen(!open);
    }} className="w-10 rounded-full">
      {user.photoURL ? 
      <img src={user.photoURL} />
        :
        <FaUser className='h-full w-full'></FaUser>
    }
    </div>
  </div>
  <div className=' sm:absolute md:absolute lg:absolute xl:static top-12'>
{ open ? <h1 className='bg-white rounded-md p-2'>{user.displayName || user.email}</h1> : ''}

<h1 className='hidden md:hidden lg:hidden'>{user.displayName || user.email}</h1> 
</div>
  </>
  }
    </div>
   
    <button onClick={() => {
       handleLogOut();
    }}  className="px-5 py-2 border-none rounded-md bg-[#0146B1]  text-white">LogOut</button>
</>
     :
 <Link className='' to={'/login'}>   <button onClick={() => {
      
    }}  className="px-5 py-2 border-none rounded-md bg-[#0146B1]  text-white">SignIn</button></Link>
  }
  </div>
</div>
        </div>
    );
};

export default Nav;