import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import {
    userAPI
} from "../../api/api";
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    status: null

}
export const getUsersTC = createAsyncThunk(
    'users/getUsersThunk',
    async (currentPage, pageSize) => {
        const req = await userAPI.getUsers(currentPage, pageSize).then(data => data)
        return req
    }
)
export const usersFollowTc = createAsyncThunk(
    'users/follow',
    async (user) => {
        const req = await userAPI.follow(user)
            .then(data => data)
        return req
    }
)
export const usersUnFollowTc = createAsyncThunk(
    'users/unFollow',
    async (user) => {
        const req = await userAPI.unFollow(user)
            .then(data => data)
        return req
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        follow(state, action) {

        },
        unFollow(state, action) {

        },

        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setTotalUsersCount(state, action) {
            state.totalUsersCount = action.payload
        },
        toggleIsFetching(state, action) {
            state.isFetching = action.payload
        },


    },
    extraReducers: {
        [getUsersTC.pending]: (state) => {
            state.isFetching = true
        },
        [getUsersTC.fulfilled]: (state, {
            payload
        }) => {
            state.isFetching = false
            state.users = payload.items
            state.totalUsersCount = payload.totalCount
        },
        [getUsersTC.rejected]: (state) => {
            state.isFetching = false
        },
        [usersFollowTc.pending]: (state, action) => {
            state.followingInProgress = [{
                progress: true,
                id: action.meta.arg.id
            }]
        },
        [usersFollowTc.fulfilled]: (state, action) => {
            if (action.payload.resultCode === 0) {
                state.users = state.users.map(u => {
                    if (u.id === action.meta.arg.id) {
                        console.log(action.meta.arg.id);
                        return {
                            ...u,
                            followed: true
                        }
                    }

                    return u

                })
            }
            state.followingInProgress = [{
                progress: false,
                id:action.meta.arg.id
            }]
            action.meta.arg.followed ?
                state.followingInProgress = [action.meta.arg.id] :
                state.followingInProgress.filter(id => id != action.meta.arg.id)


        },
        [usersFollowTc.rejected]: (state, action) => {
            console.log('error Follow')
        },
        [usersUnFollowTc.pending]: (state, action) => {
            state.followingInProgress = [{
                progress: true,
                id: action.meta.arg.id
            }]
        },
        [usersUnFollowTc.fulfilled]: (state, action) => {
            console.log(action.meta.arg.id);
            if (action.payload.resultCode == 0) {
                state.users = state.users.map(u => {
                    if (u.id === action.meta.arg.id) {
                        return {
                            ...u,
                            followed: false,
                        }
                    }
                    return u
                })
            }
            state.followingInProgress = [{
                progress: false,
                id: action.meta.arg.id
            }]
            action.meta.arg.followed ?
                state.followingInProgress = [action.meta.arg.id] :
                state.followingInProgress.filter(id => id != action.meta.arg.id)


        },
        [usersUnFollowTc.rejected]: (state, action) => {
            console.log('error unFollow')
        },
    }

})
export default userSlice.reducer
export const {
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,

} = userSlice.actions