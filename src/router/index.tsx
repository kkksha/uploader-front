import { useTypedSelector } from 'hooks/useTypedSelector';
import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/main";
import {useActions} from "../hooks/useActions";
import Auth from "../pages/auth/Auth";
const Router = ():JSX.Element => {

    const [loading, setLoading] = useState(false);
    const {user} = useTypedSelector(state => {
        return ({
            user: state.user.user
        })
    });
    const {getUserData} = useActions();


    useEffect(() => {
        setLoading(true);

        Promise.all([
            getUserData(),
        ]).then(() => {

            setLoading(false);
        })
    }, []);

    return (
        <>
            {
                !user ? <>
                    <Routes>
                        <Route path={"/"} element={<Auth/>}/>
                        <Route path={"*"} element={<Auth/>}/>
                    </Routes>
                </>: <>
                    <Routes>
                        <Route path={"/"} element={<Main/>}/>
                        <Route path={"*"} element={<Main/>}/>
                    </Routes>
                </>
            }
        </>
    )
};

export default Router;
