import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import {
    authAPI,
} from '../../api/api';
const initialState = {
    data: {
        userId: null,
        email: null,
        login: null,
        isAuth: false
    },

}
export const authTC = createAsyncThunk(
    'auth/authorise',
    async () => {
        const res = await authAPI.authMe().then(data => data)
        return res
    }
)
export const loginTC = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        const {
            email,
            password,
            rememberMe
        } = data
        const res = await authAPI.login(email, password, rememberMe).then(data => {
            console.log(data)
            if (data.resultCode === 0){
                
                thunkAPI.dispatch(authTC())
            }
        })
        return res
    }
)
export const logOutTC = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {
        const res = await authAPI.logOut().then(data => {
            thunkAPI.dispatch(authTC(null, null, null, false))
        })
        return res
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [authTC.pending]: (state, action) => {
            state.data.isAuth = false
        },
        [authTC.fulfilled]: (state, action) => {
            state.data = action.payload.data
            if (action.payload.resultCode === 0) {
                state.data.isAuth = true
            }

        },
        [authTC.rejected]: (state) => {
            state.data.isAuth = false
            console.log("что то пошло не так")
        },
        [loginTC.pending]: (state, action) => {
            state.data.isAuth = false
        },
        [loginTC.fulfilled]: (state, action) => {
            if (state.isAuth) {
                console.log("you are logined")
            }else{
                console.log('error login')
            }
            
        },
        [logOutTC.fulfilled]: (state, action) => {
            console.log('you are exit')
        }
    }
})

export default authSlice.reducer