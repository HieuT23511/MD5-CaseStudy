import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productData: [],
  userInfo: null
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id)
      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },
    deleteFromCart: (state, action) => {
      state.productData = state.productData.filter((item) => item._id !== action.payload)
    },
    resetCart: (state) => {
      state.productData = []
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id)
      if (item) {
        item.quantity++;
      }
    },
    decrementQantity: (state, action) => {
      // let productList = state.productData;
      const item = state.productData.find((item) => item._id === action.payload._id)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
      // let index = productList.findIndex(item => item._id === action.payload._id);
      // productList[index] = item;
      // state.productData = productList;

    },
    addUser: (state, action) => {
      state.userInfo = action.payload
    },
    removeUser: (state) => {
      state.userInfo = null
    }
  }
})

export const { addToCart, deleteFromCart, resetCart, incrementQuantity, decrementQantity, addUser, removeUser } = generalSlice.actions;
export default generalSlice.reducer;