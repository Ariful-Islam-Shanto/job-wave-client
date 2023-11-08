import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../Auth Provider/AuthProvider';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials : true
  });

const useAxios = () => {
//     const data = useContext(AuthContext)
//     console.log(data);
//     const navigate = useNavigate();
 
//    useEffect(() => {
//        instance.interceptors.response.use(res => {
//            //* If there is no error then return the res.
//            return res;
//        }, error => {
//            //* If error just log out the user.
//            if(error.response.status === 401 || error.response.status === 403) {
//                logOut()
//                .then(res => {
//                    toast.dismiss('session expired please log in.');
//                    navigate('/login');
//                })
//                .catch(err => {
//                    console.log(err);
//                });
//            }
//        })
//    },[logOut, navigate])

    return instance;
};

export default useAxios;