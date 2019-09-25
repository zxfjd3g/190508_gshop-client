import axios from "axios"

const shopAxios = axios.create({
    timeout:5000
})

shopAxios.interceptors.request.use((config)=>{
    return config
})

shopAxios.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return Promise.reject(err)
})

export default shopAxios