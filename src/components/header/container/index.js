import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import Header from '../components/index';
import { authTC } from '../../../redux/reducers/auth-reducer';
import { logOutTC } from './../../../redux/reducers/auth-reducer';
const HeaderContainer = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.data.isAuth)
  const login = useSelector((state) => state.auth.data.login)
    useEffect(()=>{
      dispatch(authTC())
    },[])
  return <Header  
            login={login}
            isAuth={isAuth}
            logout={logOutTC} / >
}


export default HeaderContainer
