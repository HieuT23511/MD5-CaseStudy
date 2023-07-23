import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './generalSlice'

export default configureStore({
  reducer: {
    cart: generalSlice
  }
})