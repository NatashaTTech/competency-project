import React, { createContext, useState } from 'react';
const LoginContext = createContext();

export default function LoginProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({
        email: 'myEmail',
        id: 'myId',
        cart: ['stuff']
    });

    return (
        <LoginContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </LoginContext.Provider>
    )
}