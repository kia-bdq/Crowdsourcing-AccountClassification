import axios from 'axios';

const request = axios.create({
    baseURL:'http://localhost:3200',
    timeout: 5000,
})

// request.interceptors.response.use()  
export default request;