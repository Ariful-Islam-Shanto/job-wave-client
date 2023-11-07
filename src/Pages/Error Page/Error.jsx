import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    return (
        <div className='h-[100vh] flex flex-col items-center justify-center space-y-6'>
            <img src="https://i.ibb.co/HpKPx1V/404-page-2-removebg-preview.png" alt="" className='w-1/2 h-1/2'/>
            <h1 className='text-4xl text-black font-bold'>Oops page not found.</h1>
            <p>Go back to home</p>
            <button onClick={() => navigate('/')} className='px-5 py-2 rounded-md border-none text-white bg-black'>Go Home</button>
        </div>
    );
};

export default Error;