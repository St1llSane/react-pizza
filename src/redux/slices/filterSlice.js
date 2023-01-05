import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCategory: 0,
  selectedSortItem: {
    name: 'Дороже',
    sortProp: 'price&order=desc',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
    setActiveSort: (state, action) => {
      state.selectedSortItem = action.payload
    },
  },
})

export const { setActiveCategory, setActiveSort } = filterSlice.actions

export default filterSlice.reducer
