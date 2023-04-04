import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchVideos } from "./homeAPI"

const initialState = {
  value: [],
  status: "idle",
}

export const loadHomeVideos = createAsyncThunk("home/fetchVideos", async () => {
  const videos = await fetchVideos()
  return videos
  // The value we return becomes the `fulfilled` action payload
})
export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // loadHomeVideos: (state) => {
    //   state.value = JSON.parse(localStorage.getItem("homeVideos")) || []
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadHomeVideos.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loadHomeVideos.fulfilled, (state, action) => {
        state.status = "idle"
        state.value = action.payload
      })
  },
})

// export const { loadHomeVideos } = homeSlice.actions

export const selectHomeVideos = (state) => state.home.value

export default homeSlice.reducer
