import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchSubscriptionVideos } from "./subscriptionsAPI"

const initialState = {
  value: [],
  status: "idle",
}

export const loadSubsciptionsVideos = createAsyncThunk(
  "subscriptions/fetchSubscriptionVideos",
  async () => {
    const subscriptionVideos = await fetchSubscriptionVideos()
    return subscriptionVideos
  }
)

export const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSubsciptionsVideos.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loadSubsciptionsVideos.fulfilled, (state, action) => {
        state.status = "idle"
        state.value = action.payload
      })
  },
})

export const selectSubscriptionsVideos = (state) => state.subscriptions.value

export default subscriptionsSlice.reducer
