import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://garments-order-tracker-sarver.vercel.app/'
});

const useAxios = () => {
  return axiosInstance
};

export default useAxios;