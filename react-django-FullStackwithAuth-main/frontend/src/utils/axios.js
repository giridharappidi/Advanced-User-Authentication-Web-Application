import React from 'react';
import axios from 'axios';

const axios = axios.create({
    baseURL : 'http://127.0.0.1:8000/api/',
    headers : {
        'Content-Type': 'application/json',
    },
});

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  export default axios;