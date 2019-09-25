import axios from "axios"

const shopAxios = axios.create({
    timeout:5000
})

shopAxios.interceptors.request.use((config)=>{
    return config
})

shopAxios.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})

export default shopAxios