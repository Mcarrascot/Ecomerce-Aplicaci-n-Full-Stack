import axios from 'axios'
// const BASE_URL = process.env.REACT_APP_BACKEND_URL || "https://ecommerce-api-production-5abe.up.railway.app/"
const axiosClient = axios.create({
    baseURL: "https://ecommerce-api-production-5abe.up.railway.app/",
})

export default axiosClient