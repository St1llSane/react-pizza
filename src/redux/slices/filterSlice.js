import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeCategory: 0,
  selectedSortItem: {
    name: 'Дороже',
    sortProp: 'price&order=desc',
  },
	currentPage: 1
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
		setCurrentPage: (state,action) => {
			state.currentPage = action.payload
		}
  },
})

export const sortSelector = (state) => state.filterSlice.selectedSortItem
export const filtersSelector = (state) => state.filterSlice

export const { setActiveCategory, setActiveSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer
