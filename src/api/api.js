import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a5a30551-a391-47c5-bb3f-e86cddddc51a"
    }
})

export const API = {
    getUsers(currentPage = 1, pageSize = 8) {
        return axiosInstance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfile(id) {
        return axiosInstance
            .get(`profile/${id}`)
            .then(response => response.data)
    },

    deleteSubscription(id) {
        return axiosInstance
            .delete(`follow/${id}`)
            .then(response => response.data)
    },

    addSubscription(id) {
        return axiosInstance
            .post(`follow/${id}`)
            .then(response => response.data)
    },

    checkAuthorisation () {
        return axiosInstance
            .get(`auth/me`)
            .then(response => response.data)
    },
}