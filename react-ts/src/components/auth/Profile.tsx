import React from 'react'

export interface ProfileProps {
    name: string
}

export const Profile: React.FC<ProfileProps> = ({ name }) => {
    return (
        <div>
            the user has login and his name - {name}
        </div>
    );
}