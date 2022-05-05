import {userAPI} from "api/user";
import {Dispatch} from "redux";
import {userAction, UserActionTypes as types, IUser} from "../types/userTypes";
import {RootState} from "store";
import {IUserLogin, IUserRegistration} from "api/user/types";
////////////////////////////////////////////////////////
//CREATE//POST

const createUser_ = (): userAction => {
    return {
        type: types.CREATE_USER
    }
}

const createUserFailed = (error: string): userAction => {
    return {
        type: types.CREATE_USER_FAIL,
        error: error
    }
}

const createUserSuccess = (user: IUser): userAction => {
    return {
        type: types.CREATE_USER_SUCCESS,
        user: user
    }
}


//THUNK
export const userRegistration = (obj: IUserRegistration) => {
    return (dispatch: Dispatch<userAction>) => {
        dispatch(createUser_());
        return userAPI.registration(obj).then(pld => {
            dispatch(createUserSuccess(pld));
        }).catch(error => {
            let res = error.response;
            dispatch(createUserFailed(res.data.message))
        })
    }
}


////////////////////////////////////////////////////////
//LOAD//GET

const loadUser_ = (): userAction => {
    return {
        type: types.LOAD_USER
    }
}

const loadUserFailed = (error: string): userAction => {
    return {
        type: types.LOAD_USER_FAIL,
        error: error
    }
}

const loadUserSuccess = (user: IUser): userAction => {
    return {
        type: types.LOAD_USER_SUCCESS,
        user: user
    }
}


//THUNK
export const userLogin = (obj: IUserLogin) => {
    return (dispatch: Dispatch<userAction>) => {
        dispatch(loadUser_());
        return userAPI.userLogin(obj).then(pld => {
            window.localStorage.setItem("auth_token", pld.token)
            window.location.reload();
        }).catch(error => {
            let res = error.response;
            dispatch(loadUserFailed(res.data.message))
        })
    }
}


export const getUserData = () => {
    return (dispatch: Dispatch<userAction>) => {
        dispatch(loadUser_());
        return userAPI.getUser().then(res => {
            dispatch(loadUserSuccess(res))
        }).catch(error => {
            let res = error.response;
            dispatch(loadUserFailed(res.data.message))
        })

    }
}

////////////////////////////////////////////////////////
//UPDATE

const updateUser_ = (): userAction => {
    return {
        type: types.UPDATE_USER
    }
}

const updateUserFailed = (error: string): userAction => {
    return {
        type: types.UPDATE_USER_FAIL,
        error
    }
}

const updateUserSuccess = (user: IUser): userAction => {
    return {
        type: types.UPDATE_USER_SUCCESS,
        user
    }
}


////////////////////////////////////////////////////////
//LOGOUT


const logoutUser_ = (): userAction => {
    return {
        type: types.UPDATE_USER
    }
}

const logoutUserFailed = (error: string): userAction => {
    return {
        type: types.LOGOUT_USER_FAIL,
        error
    }
}

const logoutUserSuccess = (): userAction => {
    return {
        type: types.LOGOUT_USER_SUCCESS,
    }
}

