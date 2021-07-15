import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "../Features/Movies/movieSlice.js"
import userReducer from "../Features/Movies/userSlice.js"

export default configureStore({
  reducer: {
      movie : movieReducer,
      user : userReducer,
  },
})