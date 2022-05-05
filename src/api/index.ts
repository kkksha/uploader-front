import axios, {} from "axios";

axios.defaults.baseURL = "https://abazovskaya.pro.atlas-ilya.online/";
axios.defaults.headers.common['Content-Type']  = 'application/json';
axios.defaults.withCredentials = false;



const getToken = () => {
    let tk = window.localStorage.getItem('auth_token')
    if (tk === undefined || tk === '') {
        return;
    }
    return tk;
}

axios.interceptors.request.use((config) => {
    let token = getToken();
    if (token !== undefined &&  token !== null) {
        // @ts-ignore
        config.headers['Authorization'] = "bearer " + token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);

})


export default axios;
