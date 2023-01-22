import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      )

      if (findProduct) {
        findProduct.count++
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        })
      }

      state.totalPrice = state.products.reduce((summ, product) => {
        return summ + product.price * product.count
      }, 0)
    },
    removeProduct: (state, action) => {
			if (state.products.length >= 1) {
				state.totalPrice = 0
			}
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
    minusProduct: (state, action) => {
      const findProduct = state.products.find(
        (product) => product.id === action.payload
      )
      if (findProduct) {
        findProduct.count--
      }
    },
    clearProducts: (state) => {
      state.products = []
      state.totalPrice = 0
    },
  },
})

export const cartSelector = (state) => state.cartSlice
export const cartItemByIdSelector = (id) => (state) =>
  state.cartSlice.products.find((product) => product.id === id)

export const { addProduct, removeProduct, minusProduct, clearProducts } =
  cartSlice.actions

export default cartSlice.reducer
