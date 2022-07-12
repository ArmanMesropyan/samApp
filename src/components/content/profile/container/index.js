import React, { useEffect } from "react"
import Profile from "../components"
import withAuthRedirect from './../../../../hoc/withAuthRedirect';
import { useDispatch, useSelector } from "react-redux";
import {  profileTC , 
          profileStatusTC ,
          updateProfileStatusTC} from '../../../../redux/reducers/profile-reducer';
import { compose } from "redux";
import {  withRouter } from "react-router-dom";

const ProfileContainer = (props) => {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profileReducer.profile)
    const status = useSelector((state) => state.profileReducer.status)
    const authUserId = useSelector((state) => state.auth.data.id)
    useEffect(()=>{
        let userId = props.match.params.userId
        if(!userId ){
          userId = authUserId
          if(!userId){
            props.history.push('/login')
          }
          }
          dispatch(profileTC(userId))
          dispatch(profileStatusTC(userId))
    },[])

    return <Profile 
            profile={profile}
            status={status}
            updateProfileStatusTC={updateProfileStatusTC}/>
}


export default compose(
  withRouter,
  withAuthRedirect 
)(ProfileContainer)
