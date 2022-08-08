import React, { useReducer } from "react";

export const UserContext = React.createContext()
const defaultState = {
    isLogin: false,
    user: {}
}

function reducer(user, action) {
    const { type, payload } = action

    switch(type) {
        case 'LOG_IN':
            return {
                isLogin: true,
                user: payload
            }
        case 'LOG_OUT' :
            return {
                isLogin: false,
                user: {}
            }
        default: throw new Error()
    }
}

export function UserContextProvider({ children }) {
    const [user, setUSer] = React.useReducer(useReducer, defaultState)

    return (
        <UserContext.Provider value={ [user, setUSer] }>
            { children }
        </UserContext.Provider>
    )
}