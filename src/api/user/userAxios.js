import axios from "axios"

const userAxios = axios.create({
    timeout:5000
})

userAxios.interceptors.request.use((config)=>{
    return config
})

userAxios.interceptors.response.use((res)=>{
    return res.data
},(err)=>{
    return Promise.reject(err)
})

export default userAxios