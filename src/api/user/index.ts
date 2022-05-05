import axios from "../index"
import {IUserLogin, IUserRegistration, IUserUpdate} from "./types";

export const userAPI = {

    async userLogin(obj: IUserLogin) {
        let pld = (await axios.post(`/auth/login`, obj)).data;
        console.log(pld)
        return pld;
    },

    async getUser() {
        let pld = (await axios.get(`/auth/me`)).data;
        return pld;
    },

    async registration(obj: IUserRegistration) {
        let pld = (await axios.post(`/auth/registration`, obj)).data;
        return pld;
    },

    async updateUser(obj: IUserUpdate) {
        let pld = (await axios.put(`/user`, obj)).data;
        return pld;
    },
}
