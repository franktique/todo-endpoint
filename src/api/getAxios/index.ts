import axios, { AxiosInstance } from 'axios';
import getEnv from '../../utils/index'

const API_KEY = getEnv('REACT_APP_API_KEY');
const API_BASE_URL = getEnv('REACT_APP_API_BASE_URL');
const headers = {};

console.log(API_KEY)
console.log(API_BASE_URL)

Object.assign(headers, {
    'x-api-key': API_KEY,
});

const getAxios = (): AxiosInstance =>
  axios.create({
    baseURL: API_BASE_URL,
    headers,
  });
export default getAxios;