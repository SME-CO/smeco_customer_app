import axios from "../axios"



const registerCustomer = (data) => {
    return axios.post(`/customersUsers`, data);
}

const login = (data) => {
    return axios.post(`/customersUsers/login`, data);
}

export default {
    registerCustomer: registerCustomer,
    login: login
};
