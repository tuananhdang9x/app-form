import axios from "axios";
const axiosClient = axios.create({
    baseURL: 'http://localhost:8081/',
  });
axiosClient.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default axiosClient;