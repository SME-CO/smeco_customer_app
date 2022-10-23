import axios from "../axios"



const createFaq = (data) => {
    return axios.post(`/faq`, data);
}

const getFaq = () => {
    return axios.get(`/faq`);
}

export default {
    createFaq: createFaq,
    getFaq: getFaq
   
};
