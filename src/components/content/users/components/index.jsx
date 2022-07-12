import React from 'react'
import './index.scss'
import img from '../../../../assets/img/236831.png'
import { NavLink } from 'react-router-dom';
import Pagination from './pagination';
import { useDispatch, useSelector } from 'react-redux';
import { usersFollowTc , usersUnFollowTc} from '../../../../redux/reducers/users-reducer';
const Users = (props) => {
    const isAuth = useSelector((state) => state.auth.data.isAuth)
    const dispatch = useDispatch()
    console.log(props.followingInProgress )
    return (
    <div className='L-users-page G-container'>
            <div className="L-users-wrapper">
      <Pagination
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
      />
      <div className='L-users-content G-flex G-justify-between G-flex-wrap'>
      { props.users && props.users.map(u => {
        return (
         <div className='L-users G-flex G-justify-between G-align-center G-flex-wrap' key={u.id}>
            <div className='L-users-child'>
                <div className='L-users-img'>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={
                         u.photos.small != null ?
                         u.photos.small :
                         img } alt="img" />
                    </NavLink>
                </div>
               {!isAuth ? null :  <div className='L-users-btn'>
                        {!u.followed
                            ? <button disabled={
                                props.followingInProgress.some(id => id === u.id)
                            } 
                            onClick={() => {
                                dispatch(usersFollowTc(u))
                                console.log(u.id)
                            }}>Follow</button>
                            : <button disabled={
                                props.followingInProgress.some(id => id === u.id)
                            } 
                            onClick={() => {
                                dispatch(usersUnFollowTc(u))
                                console.log(u.id)
                            }}>unFolow</button>
                        }
                     </div>}
                 </div>
                 <div className='L-users-child'>
                     <span className='L-users-content'>
                         <div>{u.name}</div>
                         <div>{u.status}</div>
                     </span>
                 </div>
             </div>
         )})}
            </div>
            </div>
        </div>
    )
}
export default Users