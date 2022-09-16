import axios from "../axios"



const createFaq = (data) => {
    return axios.post(`/faq`, data);
}

export default {
    createFaq: createFaq,
   
};
