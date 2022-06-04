import React from 'react'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';

import Post from './post/index';
import { addPosts, updatePosts } from '../../../../../redux/reducers/profile-reducer';
const MyPost = () => {
  const profile = useSelector((state) => state.profileReducer)
  const dispatch = useDispatch()
  const posts = profile.posts
  let nePostText = profile.newPostText
  const addPost = () => {
    if(nePostText){
      dispatch(addPosts())
    }
   
  }
  let textChange = (e) => {
    let text = e.target.value
    dispatch(updatePosts(text))


  }
  let postsItem = posts.map(post => <Post
    key={post.id}
    message={post.message}
    likesCount={post.likesCount} />)
  

  return (
    <div className='L-my-posts '>
      <>
        <div className='L-title-posts'>My Posts</div>
        <div className='L-edit-posts G-flex'>
          <textarea
            placeholder='Enter Your Message'
            onChange={textChange}
            value={nePostText}
          ></textarea>
          <button onClick={addPost}>Add</button>
        </div>
        <div className='L-posts-items G-flex G-flex-wrap '>
          {postsItem}
        </div>
      </>
    </div>
  )
}

export default MyPost