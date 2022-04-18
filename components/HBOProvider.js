import React, { useContext, useState } from 'react'

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext)
}


export function HBOProvider({ children }) {
  const [user, setUser] = useState('');
  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);


  const defaultUserImg = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-white-dog-breeds-maltese-1560293184.jpg?crop=1.00xw:0.663xh;0,0.337xh&resize=480:*';


  const createUserAction = (e) => {
    setUser(e.target.value)
  }



  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg,
        sideNavOpen,
        setSideNavOpenAction,
        accountModalOpen,
        setAccountModalOpenAction
      }}
    >
      {children}
    </StateContext.Provider>
  )
}