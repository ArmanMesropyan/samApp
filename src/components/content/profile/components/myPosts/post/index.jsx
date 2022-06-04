import React from 'react'
import './index.scss'
import man from '../../../../../../assets/posts/img/icon.png'
 const Post = ({message , likesCount}) => {
  return (
    <div className='L-posts'>
    <div className='L-post-item G-flex G-align-center'>
            <img src={man} alt="img" style={{
              width:'50px'
            }}/>
            <p>{message}</p>
           
    </div>
    <b className='L-post-like'>Like {likesCount}</b>
</div>
  )
}
export default Post
