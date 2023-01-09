import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchPizzas: '',
}

const searchPizzasQuery = createSlice({
  name: 'searchPizzasQuery',
  initialState,
  reducers: {
    setSearchPizzasQuery: (state, action) => {
      state.searchPizzas = action.payload
    },
    resetPizzasQuery: (state, action) => {
      state.searchPizzas = action.payload
    },
  },
})

export const searchPizzasQuerySelector = (state) => state.searchPizzasQuery.searchPizzas

export const { setSearchPizzasQuery, resetPizzasQuery } =
  searchPizzasQuery.actions

export default searchPizzasQuery.reducer
