import axios, { AxiosInstance } from 'axios'
// import { getBearerToken, removeToken } from "../helpers/tokenHelper";

import Router from 'next/router'

const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})
// For GET requests
// httpClient.interceptors.request.use(
//   (config) => {
//     const token = getBearerToken();
//     if (token) {
//       config.headers.Authorization = token;
//     }
//     return config;
//   },
//   (err) => {
//     if (err.response) {
//       if (err.response.status === 401 || err.response.status === 403) {
//         signOut();
//       }
//     } else if (err.request) {
//       // client never received a response, or request never left
//     } else {
//       // anything else
//     }
//     return Promise.reject(err);
//   }
// );

// For POST requests
// httpClient.interceptors.response.use(
//   (config) => {
//     // Add configurations here
//     const token = getBearerToken();
//     if (token) {
//       config.headers.Authorization = token;
//     }
//     return config;
//   },
//   (err) => {
//     if (err.response) {
//       if (err.response.status === 401 || err.response.status === 403) {
//         signOut();
//       }
//     } else if (err.request) {
//       // client never received a response, or request never left
//     } else {
//       // anything else
//     }
//     return Promise.reject(err);
//   }
// );

export default httpClient
