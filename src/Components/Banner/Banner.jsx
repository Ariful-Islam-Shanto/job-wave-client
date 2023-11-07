import React from 'react';

const Banner = () => {
    // const bg = {
    //     backgroundImage : `url('https://i.ibb.co/Ny8ryQg/Desktop-1.jpg')`,
    //     backgroundPosition : 'cover'
    // }
    return (
        <div  className=' w-full'>
        <div className='flex relative max-w-6xl mx-auto items-center justify-center h-[600px] '>
            <div className='flex-1 space-y-6'>
                <h1 className='text-6xl font-bold tracking-wide '>Ride the Wave to Your <br /> <span className='text-[#0146B1]'>Dream Career</span>
                {/* <span className="bg-gradient-to-r from-[#0650be] to-[#6aa1f2] bg-clip-text text-transparent">Dream Career</span> */}
                </h1>
                <p className='text-[#767983] text-sm tracking-wider leading-[20px]'>Jump on board JobWave and ride the currents of opportunity. Connect with top employers, explore job listings, and let us guide you toward your ideal career. Get started today on your path to professional success.</p>
               
            </div>
            <div className='flex-1 relative h-full'>
                   <div className='bg-blue-400 opacity-10 w-20 h-20 backdrop-blur-2xl rounded-full'></div>
                   <div className='bg-blue-400 absolute right-20 opacity-10 top-30 w-20 h-20 backdrop-blur-2xl rounded-full'> </div>
                   <div className='bg-blue-400 absolute left-0 opacity-10 bottom-20 w-20 h-20 backdrop-blur-2xl rounded-full'> </div>
                    <img src="https://i.ibb.co/1zsqnCr/Girl-with-laptop.png" alt="" className='absolute left-0 bottom-0 h-full w-full object-cover z-40'/>
                    <img src="https://i.ibb.co/m47nTjx/Wave.png" alt="" className='absolute w-[180px] h-[50px] left-[20%] z-0 top-[50%] -rotate-6'/>
                    <img src="https://i.ibb.co/m47nTjx/Wave.png" alt="" className='absolute w-[180px] h-[50px] right-[10%] z-0 top-[50%] rotate-6' />
            </div>

            <div className='absolute z-50 bottom-16 w-2/3 left-0 flex items-center gap-2 border p-4 rounded-md bg-white'>
                    <input type="text" name="" id="" className='px-7 py-2 rounded-md border flex-1' placeholder='Search Jobs'/>
                    <button className='px-7 py-2 hover:bg-[#00A79D] rounded-md border-none bg-[#00A79D]  text-white hover:text-white drop-shadow-md' >Search</button>
                </div>
        </div>
        </div>
    );
};

export default Banner;