import React from 'react'

const ProfileInfoData = (props) => {
  return (
    <div className="L-profile-info-child">
     {props.isOwner &&  <button onClick={props.goToEditMode}>Edit</button>}
    <div className='L-profile-about-me'>
      About Me::{!props.profile.aboutMe ? ' ***' : props.profile.aboutMe}
    </div>
    <div className='L-profile-about-me'>
      Full Name::{!props.profile.fullName ? ' ***' : props.profile.fullName}
    </div>
    
    <div className='L-profile-about-me'>
      Lokgin for a Job:: <b>{!props.profile.lookingForAJob ? ' No' : 'Yes'}</b>
    </div>

    <div className='L-profile-about-me'>
      Job Description::{!props.profile.lookingForAJobDescription ? ' ***'
        : props.profile.lookingForAJobDescription}
    </div>
  </div>
  )
}

export default ProfileInfoData