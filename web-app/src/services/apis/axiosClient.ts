import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://genius.p.rapidapi.com/',
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'genius.p.rapidapi.com',
    'x-rapidapi-key': '9532c743e6msh52ca14f9c5e774ap19ed2cjsn0c1648da1632',
  },
});

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      return error.response;
    }
  },
);

export default axiosClient;
