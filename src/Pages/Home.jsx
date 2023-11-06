import React from 'react';
import Banner from '../Components/Banner/Banner';
import 'react-tabs/style/react-tabs.css';
import Nav from '../Components/Navbar/Navbar/Nav';
import JobByCategory from '../Components/Job by category/JobByCategory';

const Home = () => {
    const bg = {
        backgroundImage : `url('https://i.ibb.co/XtT0tXx/Desktop-5.png')`,
        backgroundPosition : 'cover'
    }
    return (
        <div>
        <div style={bg} className=''>
            <Nav></Nav>
            <Banner></Banner>
        </div>
        <JobByCategory></JobByCategory>
        </div>
    );
};

export default Home;