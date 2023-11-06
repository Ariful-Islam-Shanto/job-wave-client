import React, { useContext } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../Auth Provider/AuthProvider';


const Nav = () => {
  const {user, logOut} = useContext(AuthContext);


  const navigate = useNavigate();


  const handleLogOut = () => {
    logOut() 
    .then(() => {
      alert('Successfully logged out')
    })
    .catch((error) => {
    // An error happened.
    console.log(error);
  })
  }
    return (
        <div className=' w-full py-6' >
 <div className="navbar max-w-4xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-bold">JobWave</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal flex gap-12 px-1">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/register'}>About Us</NavLink>
      { !user && <NavLink to={'/register'}>Register</NavLink>}
     { !user && <NavLink to={'/login'}>Login</NavLink> }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
   
    <button onClick={() => {
       handleLogOut();
    }}  className="px-5 py-2 border-none rounded-md bg-[#4640DE]  text-white">LogOut</button> :
 <Link className='' to={'/login'}>   <button onClick={() => {
      
    }}  className="px-5 py-2 border-none rounded-md bg-[#4640DE]  text-white">Sign Up</button></Link>
  }
  </div>
</div>
        </div>
    );
};

export default Nav;