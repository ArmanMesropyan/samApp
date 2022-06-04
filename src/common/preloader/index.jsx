import React from 'react'
import './index.scss'
import loader from '../../assets/img/11.gif'
export default function Preloader() {
  return (
    <div className='G-preloader'>
      <img src={loader} alt='img' />
    </div>
  )
}
