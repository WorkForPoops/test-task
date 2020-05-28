import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    username: null,
    login: null,
    isAuth: false,
    arr: []
}

export const test1 = initialState.test

const authReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_DATA:
            state.isAuth = true
            return {
                ...state,
                arr: action.arr
            }
        default:
            return state;
    }
}

export const setAuthUserData = (arr, isAuth) => ({type: SET_USER_DATA, arr, isAuth})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    let arr = response.data.Response
    dispatch(setAuthUserData(arr, true))

}

export const login = (username, password) => async (dispatch) => {

    let response = await authAPI.login(username, password)

    if(response.data.Status == true){
        dispatch(getAuthUserData())
    }
}

export default authReducer;