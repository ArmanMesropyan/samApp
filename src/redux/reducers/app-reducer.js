import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import {
    authTC
} from './auth-reducer';

const initialState = {
    initialized: false
}
export const initializedTC = createAsyncThunk(
    'app/initializedTC',
    async (_,thunkAPI) => {
        let promise = thunkAPI.dispatch(authTC())
        Promise.all([promise]).then(() => {
            thunkAPI.dispatch(setInitialized())
            
        })
    }
)

const appReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setInitialized(state) {
            state.initialized = true
            console.log(state.initialized,'ini')
        }
    },
 
});

export const {
    setInitialized
} = appReducer.actions

export default appReducer.reducer