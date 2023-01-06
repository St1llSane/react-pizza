import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import searchPizzasQuery from './slices/searchPizzasQuery'

export const store = configureStore({
  reducer: {
    filterSlice,
    searchPizzasQuery,
  },
})
