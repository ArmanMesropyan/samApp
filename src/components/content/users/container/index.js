import React from 'react'
import { useEffect } from 'react';
import Users from '../components'
import Preloader from './../../../../common/preloader/index';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {
    setCurrentPage,
} from '../../../../redux/reducers/users-reducer';
import {getUsersTC} from '../../../../redux/reducers/users-reducer';
const UsersContainer = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.usersReducer.users)
    const pageSize = useSelector((state) => state.usersReducer.pageSize)
    const totalUsersCount = useSelector((state) => state.usersReducer.totalUsersCount)
    const currentPage = useSelector((state) => state.usersReducer.currentPage)
    const isFetching = useSelector((state) => state.usersReducer.isFetching)
    const followingInProgress = useSelector((state) => state.usersReducer.followingInProgress)

    useEffect(()=>{
        dispatch(getUsersTC(currentPage ,pageSize ))
    },[])



    const onPageChanged = (pageNumber) => {
        dispatch(getUsersTC(pageNumber, pageSize))
        dispatch(setCurrentPage(pageNumber))

    }
    return <> 
            {isFetching ? <Preloader/> : null}
            <Users
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                users={users}
                followingInProgress={followingInProgress}
            />
        </>

}
export default UsersContainer