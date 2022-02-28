import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes} from "../routes";
import {publicRoutes} from "../routes";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <Routes>
            {user
                ? privateRoutes.map(({ path, Element, toPath }) =>
                    <Route key={path} path={path} element={<Element to={toPath ? toPath : ''}/>} />)
                : publicRoutes.map(({ path, Element, toPath }) =>
                    <Route key={path} path={path} element={<Element to={toPath ? toPath : ''}/>} />)
            }
        </Routes>
    )
};

export default AppRouter;