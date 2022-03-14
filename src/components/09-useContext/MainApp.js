import React from 'react'
import { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {


  const [user, setUser] = useState({});

  return (
    <>
    <hr />
    <UserContext.Provider value={{
      user,
      setUser
      }}>
    <AppRouter/>  
    </UserContext.Provider>

  </>
  )
}
