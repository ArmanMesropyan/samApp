import React from 'react'
import profileReducer, {
  addPosts
} from "./profile-reducer";


it('new post should be added  ', () => {
  //1 test data
  let action = addPosts('armo')
  const state = {
    posts: [{
        id: 1,
        message: 'hello',
        likesCount: 1
      },
      {
        id: 2,
        message: 'how are you',
        likesCount: 13
      },
      {
        id: 3,
        message: 'hi',
        likesCount: 14
      },
      {
        id: 4,
        message: '121',
        likesCount: 155
      },
      {
        id: 5,
        message: 'my name is A',
        likesCount: 12
      },
      {
        id: 6,
        message: 'bye bye',
        likesCount: 5
      },

    ],
    newPostText: '',
    profile: null,
    status: ''

  }
  //2 action 
  let newState = profileReducer(state, action)
  // 3 expectation
  expect( newState.posts.length).toBe(7)
});