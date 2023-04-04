import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchChannel } from "./channelAPI"

const initialState = {
  value: {},
  status: "idle",
}

export const loadChannel = createAsyncThunk(
  "channel/fetchChannel",
  async (id) => {
    const channel = await fetchChannel(id)
    return channel
    // The value we return becomes the `fulfilled` action payload
  }
)
export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadChannel.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loadChannel.fulfilled, (state, action) => {
        state.status = "idle"
        state.value = action.payload
      })
  },
})

export const selectChannel = (state) => state.channel.value

export default channelSlice.reducer
