export interface IUser {
    id: number,
    email: string,
    firstName: string,
    lastName: string
}

export interface IUserState {
    user: IUser | null,
    error: string | undefined,
    loading: boolean
}


export enum UserActionTypes {
    CREATE_USER = "CREATE_USER",
    LOAD_USER = "LOAD_USER",
    UPDATE_USER = "UPDATE_USER",
    LOGOUT_USER = "LOGOUT_USER",

    CREATE_USER_FAIL = "CREATE_USER_FAIL",
    LOAD_USER_FAIL = "LOAD_USER_FAIL",
    UPDATE_USER_FAIL = "UPDATE_USER_FAIL",
    LOGOUT_USER_FAIL = "LOGOUT_USER_FAIL",

    CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
    LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS",
    UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
    LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS",
}


/////////////////////Actions/////////////////////////

interface ICreateUser {
    type: UserActionTypes.CREATE_USER;
}


interface ILoadUser {
    type: UserActionTypes.LOAD_USER;
}

interface IUpdateUser {
    type: UserActionTypes.UPDATE_USER;
}

interface ILogoutUser {
    type: UserActionTypes.LOGOUT_USER;
}

/////////////////////Fail/////////////////////////

interface ICreateUserFail  {
    type: UserActionTypes.CREATE_USER_FAIL;
    error: string;
}

interface ILoadUserFail {
    type: UserActionTypes.LOAD_USER_FAIL;
    error: string;
}

interface IUpdateUserFail {
    type: UserActionTypes.UPDATE_USER_FAIL;
    error: string;
}


interface ILogoutUserFail {
    type: UserActionTypes.LOGOUT_USER_FAIL;
    error: string;
}

/////////////////////Success/////////////////////////

interface ICreateUserSuccess {
    type: UserActionTypes.CREATE_USER_SUCCESS;
    user: IUser;
}

interface ILoadUserSuccess {
    type: UserActionTypes.LOAD_USER_SUCCESS;
    user: IUser;
}

interface IUpdateUserSuccess {
    type: UserActionTypes.UPDATE_USER_SUCCESS;
    user: IUser | null;
}

interface ILogoutUserSuccess {
    type: UserActionTypes.LOGOUT_USER_SUCCESS;
}


export type userAction =
    ILoadUser | IUpdateUser | ILogoutUser | ICreateUser |
    ILoadUserFail | IUpdateUserFail | ILogoutUserFail | ICreateUserFail |
    ILoadUserSuccess | IUpdateUserSuccess | ILogoutUserSuccess | ICreateUserSuccess
