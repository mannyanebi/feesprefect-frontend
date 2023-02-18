import axios from 'axios';

export default axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:8000/api/v1',
    baseURL: 'http://localhost:8000/api/v1/',
    headers: {
        'Content-type': 'application/json',
    },
});
