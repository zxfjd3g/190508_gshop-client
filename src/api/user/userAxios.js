import axios from "axios"
import store from '@/vuex/store'

const userAxios = axios.create({
    timeout:5000
})

userAxios.interceptors.request.use((config)=>{
    const token = store.state.user.token
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

userAxios.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    return Promise.reject(error)
})

export default userAxios