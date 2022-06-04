import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
const SideBar = () => {
    const isActive = (isActive) => (!isActive ? "L-sidebar-link": "L-sidebar-active-link")
    return (
        <div className='L-sidebar'>
            <ul className='G-flex'>
                <NavLink to='/profile' className={isActive} >Profile</NavLink>
                <NavLink to='/dialogs' className={isActive} >Message</NavLink>
                <NavLink to='/users' className={isActive} >Users</NavLink>
                <li className='L-sidebar-link'>News</li>
                <li className='L-sidebar-link'>Music</li>
                <li className='L-sidebar-link'>Settings</li>
            </ul>
        </div>
    )
}
export default SideBar 