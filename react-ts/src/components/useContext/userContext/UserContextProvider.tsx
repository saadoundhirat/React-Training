import React, { useState, createContext } from 'react'
//  how to make user status context Provider and use it as provider to other components as children
//  an here the useContext can have future value so we have to fix that in ts an provide proper types


interface UserContextProviderProps {
    children: React.ReactNode;
}

interface AuthUser {
    name: string;
    email: string;
}

type UserContextType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext <UserContextType | null>( {} as UserContextType)

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<AuthUser | null>(null)
        return (
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        );
}