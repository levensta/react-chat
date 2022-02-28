import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/const";
import Chat from "./components/Chat";
import Login from "./components/Login";
import {Navigate} from "react-router-dom";

export const publicRoutes = [
    {path: LOGIN_ROUTE, Element: Login},
    {path: "*", Element: Navigate, toPath: LOGIN_ROUTE}
];

export const privateRoutes = [
    {path: CHAT_ROUTE, Element: Chat},
    {path: "*", Element: Navigate, toPath: CHAT_ROUTE}
];