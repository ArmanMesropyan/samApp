import React from 'react'
import ProfileInfo from './profileInfo/index';
import MyPost from './myPosts/index';

const Profile = (props) => {
  return (
    <div className='G-container ' >
      <ProfileInfo 
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status} 
        updatePhoto={props.updateProfilePhotoTC}
        updateStatus={props.updateProfileStatusTC} />
      <MyPost/>
    </div>
  )
}
export default Profile