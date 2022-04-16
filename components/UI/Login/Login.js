import Head from 'next/head'
import { useStateContext } from '../../HBOProvider'




const Login = () => {
  const globalState = useStateContext();




  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">
          Who Is Watching?
        </span>
      </div>

      <div className="login-user__form">
        <div className="login-user__user-box">
          <img className="login-user__user-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-white-dog-breeds-maltese-1560293184.jpg?crop=1.00xw:0.663xh;0,0.337xh&resize=480:*" />
          <div className="login-user__user-name">Cookie</div>
        </div>
      </div>
      <div className="login-user__buttons">
        <button className="login-user__adult">Add Adult</button>
        <button className="login-user__kid">Add Kid</button>
      </div>
    </div>
  )
}

export default Login