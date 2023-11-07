import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Main Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddAJob from '../Pages/Add A Job/AddAJob';
import MyJobs from '../Pages/My Job/MyJob';
import JobDetails from '../Components/JobDetails/JobDetails';
import AllJobs from '../Pages/All Jobs/AllJobs';
import Error from '../Pages/Error Page/Error';


const route = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Error></Error>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addJob',
                element : <AddAJob></AddAJob>
            },
            {
                path : '/myJobs',
                element : <MyJobs></MyJobs>
            },
            {
                path : '/job/:id',
                element : <JobDetails></JobDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/jobById/${params.id}`)
            },
            {
                path : '/allJobs',
                element : <AllJobs></AllJobs>,
                loader : () => fetch('http://localhost:5000/jobCategories')
            }
        ]
    }
])
    


export default route;