import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { react, fetchVideo, subscribe } from "./videoAPI"

const initialState = {
  value: {},
  status: "idle",
}

export const loadVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await fetchVideo(id)
  return video
})

export function reactToVideo(video, value) {
  return async function reactToVideoThunk(dispatch, getState) {
    const response = await react(video, value)
  }
}
export function handleSubscribe(video) {
  return async function subscribeThunk(dispatch, getState) {
    const response = await subscribe(video)
  }
}

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadVideo.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loadVideo.fulfilled, (state, action) => {
        state.status = "idle"
        state.value = action.payload
      })
  },
})

export const selectVideo = (state) => state.video.value

export default videoSlice.reducer
