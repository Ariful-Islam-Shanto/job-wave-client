import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Auth Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <div className='min-h-screen bg-white flex items-center justify-center'><span className="loading loading-spinner loading-lg"></span></div>
    }
    

    if(user) {
        return children;
    }
    else{
        toast.error('Please login to see details');
        return <Navigate to={'/login'}></Navigate>
    }
    
};

export default PrivateRoute;