import React from 'react';

import { Outlet } from 'react-router-dom';
import Nav from '../Components/Navbar/Navbar/Nav';

const Root = () => {
    return (
        <div className='w-full '>
            {/* <Nav></Nav> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;