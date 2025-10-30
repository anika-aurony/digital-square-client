import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: `http://182.48.80.169:5000`
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;