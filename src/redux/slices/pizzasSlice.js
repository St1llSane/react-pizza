import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const { searchByCategory, searchBySort, searchByInput, currentPage } =
      params
    const { data } = await axios.get(
      `https://63b45a540f49ecf50888a07e.mockapi.io/pizzas?page=${currentPage}&limit=4&${searchByCategory}&${searchBySort}&${searchByInput}`
    )
    return data
  }
)

const initialState = {
  pizzas: [],
  status: 'loading',
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.pizzas = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading'
			state.pizzas = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload
			state.status = 'success'
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error'
			state.pizzas = []
    })
  },
})

export const pizzasSelector = (state) => state.pizzasSlice

export const { setPizzas } = pizzasSlice.actions

export default pizzasSlice.reducer

