import React, { useContext, useState } from 'react'
import ls from 'local-storage'


export const StateContext = React.createContext();


export function useStateContext() {
  return useContext(StateContext)
}




export function HBOProvider({ children }) {
  const [user, setUser] = useState('');
  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModalOpen, setAccountModalOpenAction] = useState(false);
  const [searchOpen, setSearchOpenAction] = useState(false);
  const [watchList, setWatchList] = useState(ls.get('myList'))


  // function to add to list
  const addToList = (video) => {
    let myList;

    // If its not empty(there's already a [movie] in the array LS)
    if (ls('myList') !== null) {
      // grab whatevers in the LS and set it to myList
      myList = ls.get('myList')

      // push the video we pass to the LS array
      myList.push(video)

      // set the new myList into the LS
      ls.set('myList', myList)

      // update the watch list state
      setWatchList(myList)
    } else {
      // if its empty, pass in a new video with the current video being pass
      ls.set('myList', [video])
    }
  }



  // Remove movie from list
  const removeFromList = (videoId) => {
    let myList = ls('myList');

    // return everything minus the videoId
    myList = myList.filter((item) => item.mediaId !== videoId)

    // set new LS
    ls.set('myList', myList)

    setWatchList(myList)
  }






  const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h']


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
        setAccountModalOpenAction,
        searchOpen,
        setSearchOpenAction,
        thumbTypes,
        addToList,
        removeFromList,
        watchList,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}