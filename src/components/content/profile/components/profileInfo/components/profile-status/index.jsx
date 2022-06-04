import React, { useState } from 'react'
import './index.scss'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)
  const dispatch = useDispatch()
  const activeEditMode = () => {
    setEditMode(!editMode)
  }
  const deActiveEditMode = () => {
    setEditMode(!editMode)
    dispatch(props.updateStatus(status))
  }
  const onStatusChange = (e) => {
    let newStatus = e.currentTarget.value
    setStatus(newStatus)
  }

  return (
    <div className='L-profile-status'>
      {!editMode
        ? <div className='L-status-child'>
          <span onClick={activeEditMode}>{props.status || 'my status'}</span>
        </div>
        : <div className='L-status-child'>
          <input
            autoFocus={true}
            onBlur={deActiveEditMode}
            onChange={onStatusChange}
            type="text"
            value={status} />
        </div>
      }
    </div>
  )
}
export default ProfileStatus