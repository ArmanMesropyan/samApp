import React from 'react'
import LoginForm from './components/loginForm'
import './index.scss'
import { useDispatch } from 'react-redux';
import { loginTC } from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {
  const isAuth = useSelector((state) => state.auth.data.isAuth)
  const dispatch =  useDispatch()
  const onSubmit = (formData) => {
    const data ={
      email:formData.email,
      password:formData.password
    }
    dispatch(loginTC(data))
  }
  if(isAuth){
    return <Redirect to='/profile'/>
  }
  return (
    <div className='G-container L-Login-page'>
      <h2 className='L-login-title'>Login</h2>
      <div className='L-login-data'>
          <p>Login: mesropyanarman4@gmail.com</p>
          <p>Password: 140240aa</p>
      </div>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  )
}
export default Login