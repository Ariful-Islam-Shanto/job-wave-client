import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-full md:h-[600px] lg:h-[600px] xl:h-[600px] mx-auto py-0 md:py-12 gap-4 md:gap-4 lg:gap-4 xl:gap-0 px-8 md:px-0 lg:px-0 xl:px-0 lg:py-12 xl:py-12'>
            <div className='flex-1 h-full text-center lg:text-left md:text-left xl:text-left flex flex-col items-start space-y-8 justify-center'>
                <h1 className='text-4xl text-black font-bold'>Why We are Most <span className='text-[#0146B1]'>Popular</span></h1>
                <p className='text-gray-600'>At <span className='text-[#0146B1] font-bold'>JobWave</span>, we are your trusted partner in the world of employment. Whether you're on the hunt for a new job, eager to post an opening at your organization, or seeking guidance on your career journey, we've got you covered. Here's why you should choose us:</p>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='text-black bg-white font-medium p-2 md:p-2 lg:p-8 xl:p-10 rounded-md drop-shadow-md'>
                        <h1>1. Quality Job</h1>
                    </div>
                    <div className='text-black bg-white font-medium p-2 md:p-2 lg:p-8 xl:p-10 rounded-md drop-shadow-md'>
                        <h1>2. Top Companies</h1>
                    </div>
                    <div className='text-black bg-white font-medium p-2 md:p-2 lg:p-8 xl:p-10 rounded-md drop-shadow-md'>
                        <h1>3. No Extra Charge</h1>
                    </div>
                    <div className='text-black bg-white font-medium p-2 md:p-2 lg:p-8 xl:p-10 rounded-md drop-shadow-md'>
                        <h1>4. International Job</h1>
                    </div>
                </div>
            </div>
            <div className='flex-1 bg-[#F3F7FA] w-full min-h-screen   md:min-h-0 lg:min-h-0 xl:min-h-0  flex items-center justify-center p-10 relative h-full md:h-full lg:h-full xl:h-full'>
                <img src="https://i.ibb.co/8rY9s7W/76cd0b48-3b65-4579-8431-a24f854308f6-J25-EM7-1.png" alt="" srcset="" className='absolute h-full object-cover bottom-0'/>
            </div>
        </div>
    );
};

export default WhyChooseUs;