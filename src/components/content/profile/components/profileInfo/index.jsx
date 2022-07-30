import React, { useState } from 'react'
import './index.scss'
import Preloader from './../../../../../common/preloader/index';
import img from '../../../../../assets/img/236831.png'
import contentImg from '../../../../../assets/posts/img/Landscape-Color.jpg'
import ProfileStatus from './components/profile-status';
import { useDispatch } from 'react-redux';
import ProfileInfoData from './components/profile-info-data';
import ProfileDataForm from './components/profile-data-form';
import { updateProfileTC } from './../../../../../redux/reducers/profile-reducer';
const ProfileInfo = (props) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  if (!props.profile) {
    return <div className="profilePreloader"><Preloader /></div>
  }
  const mainPhotoSelect = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0]
      dispatch(props.updatePhoto(file))
    }
  }
  const onSubmit = (formData) => {
    const data = {
      aboutMe: formData.aboutMe,
      fullName: formData.fullName,
      lookingForAJobDescription: formData.lookingForAJobDescription,
    }
    dispatch(updateProfileTC(data))
    console.log(data)
  }
  return (
    <div className='L-profile-info '>
      <div className="L-profile-info-cover"
        style={{
          backgroundImage: `url('${contentImg}')`
        }}
      />
      <div className="L-profile-info-content G-flex ">
        <div className="L-profile-info-child">
          <img src={!props.profile.photos.small ? img : props.profile.photos.small} alt="img" />
          {props.isOwner && <input type={'file'} onChange={mainPhotoSelect} className='L-profilePhoto' />}
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner} />
        </div>
        <div className='L-Profile-Form'>
          {editMode
            ? <ProfileDataForm
              profile={props.profile}
              onSubmit={onSubmit} />
            : <ProfileInfoData
              goToEditMode={() => setEditMode(true)}
              profile={props.profile}
              isOwner={props.isOwner} />
          }
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo