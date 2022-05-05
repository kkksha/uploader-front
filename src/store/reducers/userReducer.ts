import {IUserState, userAction, UserActionTypes} from "../types/userTypes";

const initialState: IUserState = {
    error: undefined,
    loading: false,
    user: null,
}


const startLoading = (state: IUserState) => {
    return {...state, loading: true, error: undefined}
}

const stopLoading = (state: IUserState, error: string) => {
    return {...state, loading: false, error: error}
}


const userReducer = (state = initialState, action: userAction): IUserState => {
    switch (action.type) {

        case UserActionTypes.CREATE_USER:
        case UserActionTypes.LOAD_USER:
        case UserActionTypes.UPDATE_USER:
        case UserActionTypes.LOGOUT_USER:
            return startLoading(state)


        case UserActionTypes.CREATE_USER_FAIL:
        case UserActionTypes.LOAD_USER_FAIL:
        case UserActionTypes.UPDATE_USER_FAIL:
        case UserActionTypes.LOGOUT_USER_FAIL:
            return stopLoading(state, action.error)



        case UserActionTypes.CREATE_USER_SUCCESS:
        case UserActionTypes.LOAD_USER_SUCCESS:
            return {
                ...state, loading: false, user: action.user
            }

        case UserActionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state, loading: false, user: action.user
            }
        case UserActionTypes.LOGOUT_USER_SUCCESS:
            return {
                error: undefined,
                loading: false,
                user: null,
            }
        default:
            return state;
    }
}


export default userReducer;
