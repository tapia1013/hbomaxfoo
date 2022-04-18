import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ls from 'local-storage';
import { useMounted } from './hooks/useMounted';



const AuthCheck = (component) => {
  const router = useRouter();
  let { hasMounted } = useMounted();
  let activeUID = ls('activeUID');
  let users = ls('users') !== null ? ls('users') : [];



  useEffect(() => {
    if (activeUID === null && users < 1) {
      router.push('/create')
    }
  }, [])



  if (users.length >= 1 && activeUID !== null) {
    return hasMounted ? (component) : (
      <div className='create-user'>
        <div className='create-user__top'>
          <div className='create-user__logo'></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='create-user'>
        <div className='create-user__top'>
          <div className='create-user__logo'></div>
        </div>
      </div>
    )
  }


  return component
}

export default AuthCheck