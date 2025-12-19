import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://zap-shift-server-eta.vercel.app'
});

const useAxios = () => {
  return axiosInstance
};

export default useAxios;