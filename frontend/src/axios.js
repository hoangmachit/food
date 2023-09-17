import axios from 'axios';
const accessToken = localStorage.getItem('accessToken');
console.log("accessToken", accessToken);
const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${accessToken}`,
    }
});
export default api;
