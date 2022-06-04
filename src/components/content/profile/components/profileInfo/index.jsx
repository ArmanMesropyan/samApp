import React from 'react'
import './index.scss'
import Preloader from './../../../../../common/preloader/index';
import img from '../../../../../assets/img/236831.png'
import contentImg from '../../../../../assets/posts/img/Landscape-Color.jpg'
import ProfileStatus from './components/profile-status';
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <div className="profilePreloader"><Preloader /></div>
  }
  return (
    <div className='L-profile-info '>
      <div className="L-profile-info-cover"
        style={{
          backgroundImage: `url('${contentImg}')`
        }}
      />
      <div className="L-profile-info-content G-flex G-align-center">
        <div className="L-profile-info-child">
          <img src={!props.profile.photos.small ? img : props.profile.photos.small} alt="img" />
          <ProfileStatus 
          status={props.status}
          updateStatus={props.updateStatus}/>
        </div>
        <div className="L-profile-info-child">
          <div className='L-profile-about-me'>
            About Me::{!props.profile.aboutMe ? ' ***' : props.profile.aboutMe}
          </div>
          <div className='L-profile-about-me'>
            Full Name::{!props.profile.fullName ? ' ***' : !props.profile.fullName}
          </div>
          <div className='L-profile-about-me'>
            Job Description::{!props.profile.lookingForAJobDescription ? ' ***'
              : props.profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo