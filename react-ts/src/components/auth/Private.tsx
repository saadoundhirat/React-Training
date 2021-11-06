import React from 'react'
import { Login } from './Login';
import { ProfileProps } from './Profile'

// cuz we passed a component that has props we have to define it's type here also 
interface PrivateProps {
    isloggedin: boolean;
    component: React.ComponentType<ProfileProps>
}

export const Private: React.FC<PrivateProps> = ({ isloggedin, component: Component }) => {
    if (isloggedin) {
        return <Component name="saadoun" />
    } else {
        return <Login />
    }
}