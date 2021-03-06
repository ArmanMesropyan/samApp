import { configureStore , combineReducers , getDefaultMiddleware} from "@reduxjs/toolkit";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";


const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk:true
  });


const rootReducer = combineReducers({
    profileReducer:profileReducer,
    dialogReducer:dialogsReducer,
    usersReducer:usersReducer,
    auth:authReducer,
    app:appReducer
})
 const store = configureStore({
    reducer:rootReducer,
    devTools:true,
    middleware,
})
export default store