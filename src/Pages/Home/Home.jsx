import React from 'react';
import Banner from '../../Components/Banner/Banner';
import 'react-tabs/style/react-tabs.css';
import Nav from '../../Components/Navbar/Navbar/Nav';
import JobByCategory from '../../Components/Job by category/JobByCategory';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import CallToAction from '../../Components/CallToAction/CallToAction';

const Home = () => {
    // const bg = {
    //     backgroundImage : `url('https://i.ibb.co/XtT0tXx/Desktop-5.png')`,
    //     backgroundPosition : 'cover'
    // }
    return (
        <div>
        <div className='bg-[#F3F7FA]'>
            <Nav></Nav>
            <Banner></Banner>
        </div>
        <JobByCategory></JobByCategory>
        <WhyChooseUs></WhyChooseUs>
        <CallToAction></CallToAction>
        </div>
    );
};

export default Home;