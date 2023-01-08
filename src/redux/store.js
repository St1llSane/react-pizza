import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import searchPizzasQuery from './slices/searchPizzasQuery'
import cartSlice from './slices/cartSlice'
import pizzasSlice from './slices/pizzasSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
    searchPizzasQuery,
    cartSlice,
    pizzasSlice,
  },
})
