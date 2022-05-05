import type from "../../types/types"
const initialState = {
    user: null
}
const loginReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case type.SET_USER:
            return {...state, user: action.user }
        default:
            return state
    }}
export default loginReducer;
