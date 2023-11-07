import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Main Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddAJob from '../Pages/Add A Job/AddAJob';
import MyJobs from '../Pages/My Job/MyJob';


const route = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
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
            }
        ]
    }
])
    


export default route;