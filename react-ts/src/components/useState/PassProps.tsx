import * as React from 'react';

type Props = {
    name: string,
    usersList: {
        firstName: string,
        lastName: string,
    }[],
}
export const PassProps = ({ name, usersList }: Props) => {
    return (
        <div>
            <h2>the user name is {name}</h2>
            {
                usersList.map(user => {
                    return (
                        <>
                            <h2>user name is {user.firstName} - {user.lastName}</h2>
                        </>
                    )
                })
            }
        </div>
    );
}
