import React from 'react'
import './index.scss'
import logo from '../../../assets/img/1280px-Dyson_logo.svg.png'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
const Header = (props) => {
    // console.log(props.isAuth)
    const dispatch =  useDispatch()
    const handleClick = () =>{
        dispatch(props.logout())
    }
    return (
        <div className='L-header '>
            <div className='G-container L-header-wrapper G-flex G-justify-between G-align-center G-flex-wrap '>
                <div className='L-logo-header'>
                    <NavLink to='/'>
                        <div className='L-header-logo'
                            style={{ backgroundImage: `url('${logo}')` }} />
                    </NavLink>
                </div>
                <div className="L-header-login-block">
                    {
                        props.isAuth ?
                            <>
                                <div className='L-header-userName'>{props.login}</div>
                                <div className='L-header-log-out'>
                                    <button onClick={handleClick}>Logout</button></div>
                            </>
                            :
                            <button className='L-header-loginBtn'>
                                <NavLink to='/login'>Login</NavLink>
                            </button>
                    }

                </div>
            </div>
        </div>
    )
}
export default Header   