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
import AppliedJobs from '../Pages/Applied Jobs/AppliedJobs';
import Blog from '../Pages/Blog Page/Blog';
import Update from '../Components/Update/Update';
import axios from 'axios';
import PrivateRoute from './Private Route/PrivateRoute';



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
                element : <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
            },
            {
                path : '/myJobs',
                element : <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path : '/JobApplied',
                element : <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path : '/details/:id',
                element : <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                // loader : ({params}) => fetch(`https://job-wave-server.vercel.app/jobById/${params.id}`)
            },
            {
                path : '/allJobs',
                element : <AllJobs></AllJobs>,
                // loader : () => fetch('https://job-wave-server.vercel.app/jobCategories')
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/update/:id',
                element: <Update></Update>,
                loader : ({params}) => axios.get(`https://job-wave-server.vercel.app/jobById/${params.id}`)
            }
        ]
    }
])
    


export default route;