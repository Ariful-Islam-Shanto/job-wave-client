import React from 'react';
import Nav from '../Components/Navbar/Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='w-full max-w-[1200px] mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;