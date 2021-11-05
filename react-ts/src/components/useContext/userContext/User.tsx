import React, { useContext } from 'react'
import { UserContext } from './UserContextProvider'

export const User: React.FC = ({ }) => {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        userContext?.setUser(
            {
                name: "Saadoun",
                email: "saadoun@gmail.com"
            }
        )
    }

    const handleLogout = () => {
        userContext?.setUser(null)
    }


    return (
        <>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            {
                userContext && <div>
                    <h2>
                        userName - {userContext?.user?.name}
                        userEmail - {userContext?.user?.email}
                    </h2>
                </div>
            }
        </>
    );
}