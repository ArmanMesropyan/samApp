import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function HomePage() {
  const isAuth = useSelector((state) => state.auth.data.isAuth)
  useEffect(() => {
    if(isAuth === false){
      return <Redirect to='/login'/>
    }
  },[isAuth])
  return (
    <div className='G-container'>
        welcome to homepage
    </div>
  )
}
