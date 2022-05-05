import axios from "../index"
import {IUserLogin, IUserRegistration, IUserUpdate} from "../user/types";

export const mediaAPI = {

    async getAudios() {
        let pld = (await axios.get(`/storage/audios`)).data;
        return pld;
    },

    async getImages() {
        let pld = (await axios.get(`/storage/photos`)).data;
        return pld;
    },
    async getVideos() {
        let pld = (await axios.get(`/storage/videos`)).data;
        return pld;
    },
    async getFiles() {
        let pld = (await axios.get(`/storage/files`)).data;
        return pld;
    },

    async createAudios() {
        let pld = (await axios.post(`/storage/audios`)).data;
        return pld;
    },

    async createImages(url: string) {
        let pld = (await axios.post(`/storage/photos`, {url})).data;
        return pld;
    },
    async createVideos(url: string) {
        let pld = (await axios.post(`/storage/videos`, {url})).data;
        return pld;
    },
    async createFiles(url: string) {
        let pld = (await axios.post(`/storage/files`, {url})).data;
        return pld;
    },

}
