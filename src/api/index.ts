import axios from 'axios';
import { getAuthToken } from 'utils/auth-cookies';

const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 4000,
    headers: {
        'Content-type': 'application/json',
    },
});

AxiosInstance.interceptors.request.use((config) => {
    const token: string | undefined = getAuthToken();
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = token ? `Token ${token}` : '';
    return config;
});

export default AxiosInstance;
