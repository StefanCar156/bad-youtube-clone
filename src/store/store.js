import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "../features/home/homeSlice"
import subscriptionsReducer from "../features/subscriptions/subscriptionsSlice"
import videoReducer from "../features/video/videoSlice"
import channelReducer from "../features/channel/channelSlice"
import commentsReducer from "../features/comments/commentsSlice"

export const store = configureStore({
  reducer: {
    home: homeReducer,
    subscriptions: subscriptionsReducer,
    video: videoReducer,
    channel: channelReducer,
    comments: commentsReducer,
  },
})
