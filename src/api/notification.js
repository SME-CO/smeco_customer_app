import axios from "../axios"



const getNotifications = (data) => {
    return axios.get(`/notifications`);
}



export default {
    getNotifications: getNotifications,
    
};
