import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useStateContext } from '../../HBOProvider'
import { useRouter } from 'next/router';
import ls from 'local-storage'
import { useMounted } from '../../hooks/useMounted';



const Login = () => {
  const globalState = useStateContext();

  const router = useRouter();

  const [loadingUsers, setLoadingUsers] = useState(false)
  let users = ls('users') !== null ? ls('users') : []
  // console.log(users);

  let { hasMounted } = useMounted()


  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false)
    }
    // console.log('load effect', users);
  }, [])

  // console.log('declared users', users);

  const selectUser = (id) => {
    console.log(id);
    ls('activeUID', id)
    router.push('/')
  }

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={() => selectUser(user.id)}
            key={user.id} className="login-user__user-box"
          >
            <img className="login-user__user-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-white-dog-breeds-maltese-1560293184.jpg?crop=1.00xw:0.663xh;0,0.337xh&resize=480:*" />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        )
      })
    }
  }


  const createUser = () => {
    router.push('/')
  }



  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">
          Who Is Watching?
        </span>
      </div>

      <div className="login-user__form">
        {hasMounted ? showUsers() : ''}
      </div>
      <div className="login-user__buttons">
        <button
          className="login-user__kid"
          onClick={createUser}
        >Create User</button>
      </div>
    </div>
  )
}

export default Login