import React from 'react'
import {useSelector} from 'react-redux';
import Header from '../components/index';
import { logOutTC } from './../../../redux/reducers/auth-reducer';
const HeaderContainer = () => {
  const isAuth = useSelector((state) => state.auth.data.isAuth)
  const login = useSelector((state) => state.auth.data.login)

  return <Header  
            login={login}
            isAuth={isAuth}
            logout={logOutTC} / >
}


export default HeaderContainer
