import React, { useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/main";
import { loginActionDispatch } from '../store/actions/loginAction';
import {useDispatch, useSelector } from 'react-redux';
const Router = ():JSX.Element => {

    // @ts-ignore
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.token){
            // @ts-ignore
            dispatch(loginActionDispatch(localStorage.token))
        }

    }, [])
    if (user) {
        return (
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                {/*        <Route path={"*"} element={<Profile/>}/>*/}
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                {/*           <Route path={"*"} element={<Auth/>}/>*/}
            </Routes>
        );
    }
};

export default Router;
