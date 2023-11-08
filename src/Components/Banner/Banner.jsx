import React from 'react';

const Banner = () => {
    // const bg = {
    //     backgroundImage : `url('https://i.ibb.co/Ny8ryQg/Desktop-1.jpg')`,
    //     backgroundPosition : 'cover'
    // }
    return (
        <div  className=' w-full'>
        <div className='flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row relative px-4 md:px-4 lg:px-0 xl:px-0 w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto items-center justify-center h-[600px] md:h-[400px] lg:h-[600px] xl:h-[600px] '>
            <div className='flex-1 px-8 md:px-0 lg:px-0 xl:px-0 space-y-6'>
                <h1 className=' text-2xl md:text-4xl  lg:text-6xl xl:text-6xl font-bold tracking-wide '>Ride the Wave to Your <br /> <span className='text-[#0146B1]'>Dream Career</span>
                </h1>
                <p className='text-[#767983] text-sm tracking-wider leading-[20px]'>Jump on board JobWave and ride the currents of opportunity. Connect with top employers, explore job listings, and let us guide you toward your ideal career. Get started today on your path to professional success.</p>
               
            </div>
            <div className='flex-1 w-full relative h-full md-h-full lg:h-full xl:h-full'>
                   <div className='bg-blue-400 opacity-10 w-20 h-20 backdrop-blur-2xl rounded-full'></div>
                   <div className='bg-blue-400 absolute right-20 opacity-10 top-30 w-20 h-20 backdrop-blur-2xl rounded-full'> </div>
                   <div className='bg-blue-400 absolute left-0 opacity-10 bottom-20 w-20 h-20 backdrop-blur-2xl rounded-full'> </div>
                    <img src="https://i.ibb.co/1zsqnCr/Girl-with-laptop.png" alt="" className='absolute left-0 bottom-0 h-full w-full object-cover z-40'/>
                    <img src="https://i.ibb.co/m47nTjx/Wave.png" alt="" className='absolute w-[180px] h-[50px] left-[20%] z-0 top-[50%] -rotate-6'/>
                    <img src="https://i.ibb.co/m47nTjx/Wave.png" alt="" className='absolute w-[180px] h-[50px] right-[10%] z-0 top-[50%] rotate-6' />
            </div>

            <div className='absolute z-50 bottom-10 md:bottom-6 lg:bottom-16 xl:bottom-16 lg:w-2/3 xl:w-2/3 md:left-16 lg:left-0 xl:left-0 flex items-center gap-2 md:border-none lg:border xl:border md-p-2  lg:p-4 xl:p-4 rounded-md bg-transparent md:bg-transparent lg:bg-white xl:bg-white'>
                    <input type="text" name="" id="" className='px-7 py-2 rounded-md border flex-1' placeholder='Search Jobs'/>
                    <button className='px-7 py-2 hover:bg-[#00A79D] rounded-md border-none bg-[#00A79D]  text-white hover:text-white drop-shadow-md' >Search</button>
                </div>
        </div>
        </div>
    );
};

export default Banner;