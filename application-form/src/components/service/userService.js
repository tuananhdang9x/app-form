import axiosClient from '../api/axios.js'

export function login(data){
    return axiosClient.post('auth/login',data)
}

export function uploadAvatar(data){
    return axiosClient.post('users/upload',data)
}

export function signUp(data){
    return axiosClient.post('auth/signup',data)
}

export function setStatus(data){
    return axiosClient.post('users/status',data)
}

export function getUser(){
    return axiosClient.get('users')
}