import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const CurrentUser = window.localStorage.getItem("user")
    const CurrentToken = window.localStorage.getItem("token")

    const [auth, setAuth] = useState({
        UserName: CurrentUser, Token: CurrentToken});

    return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext;