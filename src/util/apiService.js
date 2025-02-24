import axios from "./axiosCustomize";

const createUserService = (name, email, password) => {
    const URL_API = "/v1/api/register";
    const data = {
        name, email, password
    }
    return axios.post(URL_API, data)
}

const loginService = (email, password) => {
    const URL_API = "/v1/api/login";
    const data = {
        email, password
    }
    return axios.post(URL_API, data)
}

const getAllUser = () => {
    const URL_API = "/v1/api/users";
    return axios.get(URL_API)
}

export {
    createUserService, loginService, getAllUser
}