import type from "../../types/types";
import axios from "axios";
import loginReducer from "../reducers/loginReducer";
import { Dispatch } from "redux";
import Types from "../../types/types";
export const setUser = (user:any) => {
    return {
        type: type.SET_USER,
        user
    }
}
interface IDtoAction {
    email: string,
    password: string

}
export const authActionDispatch = ({email, password}:IDtoAction) =>  async (dispatch: Dispatch<any>) => {
    axios.post("https://abazovskaya.pro.atlas-ilya.online/auth/registration", {
        email: email,
        password: password
    })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            dispatch(loginActionDispatch(response.data.token));
        })
        .catch((error) => {
            console.log(error);
        });

};


export const loginActionDispatch = (token:any) => (dispatch:any) => {
    axios.get("https://abazovskaya.pro.atlas-ilya.online/auth/registration", {
        headers: {
            Authorization: token
        }
    })
        .then((response) => {
            const userInfo = response.data;
            dispatch(setUser(userInfo));
        })
        .catch((error) => {
            console.log(error);
        });

};
