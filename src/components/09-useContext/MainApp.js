import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});

    // const user = {
    //     id: 123,
    //     name: 'Alejandro',
    //     email: 'alex@me.com'
    // }

    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppRouter></AppRouter>
        </UserContext.Provider>
    )
}
