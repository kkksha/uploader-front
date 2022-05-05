export interface IUserLogin {
    email : String
    password : String
}


export interface IUserRegistration extends IUserLogin{
    firstName? : String
    lastName? : String
}


export interface IUserUpdate {
    email?: String,
    firstName?: String,
    lastName?:  String,
}
