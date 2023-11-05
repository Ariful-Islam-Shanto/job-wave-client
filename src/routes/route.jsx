import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Main Layout/Root';
import Home from '../Pages/Home';

const route = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
    


export default route;