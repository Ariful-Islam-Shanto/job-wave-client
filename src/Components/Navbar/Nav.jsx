import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">JobWave</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 flex gap-12">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/'}>About Us</NavLink>
        <NavLink to={'/'}>LogIn</NavLink>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Nav;