import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit"
import {
  getProfileAPI,
} from './../../api/api';


const initialState = {
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
export const profileTC = createAsyncThunk(
  'profile/profileTC',
  async (userId) => {
    const res = await getProfileAPI.getProfile(userId).then(data => data)
    return res
  }
)
export const profileStatusTC = createAsyncThunk(
  'profile/profileStatusTC',
  async (userId) => {
    const res = await getProfileAPI.getStatus(userId).then(data => data)
    return res
  }
)
export const updateProfileStatusTC = createAsyncThunk(
  'profile/updateProfileStatusTC',
  async (status) => {
    const res = await getProfileAPI.updateStatus(status).then(data => data)
    return res
  }
)
export const updateProfilePhotoTC = createAsyncThunk(
  'profile/updateProfilePhotoTC',
  async (file) => {
    const res = await getProfileAPI.updatePhoto(file).then(data => data)
    return res
  }
)
export const updateProfileTC = createAsyncThunk(
  'profile/updateProfileTC',
  async (data) => {
    const res = await getProfileAPI.updateProfile(data).then(data => data)
    return res
  }
)

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addPosts(state) {
      state.posts.push({
        id: Math.random().toString(36).substr(2, 9),
        message: state.newPostText,
        likesCount: 0
      })
      state.newPostText = ''
    },
    updatePosts(state, action) {
      state.newPostText = action.payload
    },
  },
  extraReducers: {
    [profileTC.fulfilled]: (state, action) => {
      state.profile = action.payload
    },
    [profileTC.rejected]: (state) => {
      console.log("что то пошло не так")
    },
    [profileStatusTC.fulfilled]: (state, action) => {
      state.status = action.payload
    },
    [profileStatusTC.rejected]: (state) => {
      console.log("статус не получен")
    },
    [updateProfileStatusTC.fulfilled]: (state, action) => {
      if (action.payload.data.resultCode === 0) {
        console.log(action.payload.data)
        state.status = action.meta.arg
      }
      console.log(action)
    },
    [updateProfileStatusTC.rejected]: (state) => {
      console.log("статус не обновлен")
    },
    [updateProfilePhotoTC.fulfilled]: (state, action) => {
      console.log(action)
      if (action.payload.data.resultCode === 0) {
        state.profile.photos = action.payload.data.data.photos
      }
      console.log(action)
    },
    [updateProfilePhotoTC.rejected]: (state) => {
      console.log("фото не обновлено")
    },
    [updateProfileTC.fulfilled]: (state, action) => {
      if (action.payload.data.resultCode === 0) {
        debugger
        console.log(action)
        // state.profile  = {...state.profile , action}
      }
    }
  }
})

export default profileSlice.reducer
export const {
  addPosts,
  updatePosts
} = profileSlice.actions