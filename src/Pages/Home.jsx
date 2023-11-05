import React from 'react';
import Banner from '../Components/Banner/Banner';
import Nav from '../Components/Navbar/Navbar/Nav';

const Home = () => {
    const bg = {
        backgroundImage : `url('https://i.ibb.co/XtT0tXx/Desktop-5.png')`,
        backgroundPosition : 'cover'
    }
    return (
        <div style={bg} className=''>
            <Nav></Nav>
            <Banner></Banner>
        </div>
    );
};

export default Home;