import React from 'react';

import { Outlet } from 'react-router-dom';
import Nav from '../Components/Navbar/Navbar/Nav';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='w-full '>
            {/* <Nav></Nav> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;