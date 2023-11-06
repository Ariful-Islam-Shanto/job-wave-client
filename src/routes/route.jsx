import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Main Layout/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AddAJob from '../Pages/Add A Job/AddAJob';

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
            }
        ]
    }
])
    


export default route;