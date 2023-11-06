import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './Tabs.css';
import Card from './Card/Card';

const JobByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [category, setCategory] = useState('')
    const [categoryData, setCategoryData] = useState([])

    const categories = [ 'AllJobs', 'Remote', 'Hybrid', 'Part-Time', 'OnSite'];

    useEffect(() => {
        fetch(`http://localhost:5000/jobCategories?category=${category}`)
    .then(res => res.json())
    .then(data => setCategoryData(data ))
    }, [category])

    const handleCategory = (category) => {
        if(category === 'AllJobs') {
            category = '';
        }
        setCategory(category)
    }

    // const data = Object.keys(categoryData[0])
    // console.log(data.join(','));

    return (
        <div>
            <div className='max-w-4xl mx-auto py-12 space-y-12'>
                <h1 className='text-4xl text-black font-bold'>Explore by <span className='text-[#26A4FF]'>Category</span></h1>
            <div className=''>
                <Tabs selectedIndex={tabIndex || 0} onSelect={(index) => setTabIndex(index)} className={' h-full'}>
                    <TabList className={'flex items-center justify-center w-full h-full mx-auto'}>
                        {categories.map((category, index) => (
                            <Tab onClick={() => handleCategory(category)} className={`${tabIndex === index ? 'custom-tab-selected' : 'custom-tab btn btn-ghost'}`} key={index}>{category}</Tab >
                        ))}
                    </TabList>

                    { categories.map((cate, index) => (
                        <TabPanel key={index}>
                            <div className='grid grid-cols-3 py-12 gap-8'>
                                {
                                  categoryData.length > 0 &&  categoryData?.map((job, index )=> 
                                  <Card key={job._id} job={job}></Card>)
                                }
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>

                        
            </div>
        </div>
    );
};

export default JobByCategory;