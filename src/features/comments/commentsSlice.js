import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addComment, editComment, respond } from "./commentsAPI"

const initialState = {
  value: {},
  status: "idle",
}

export function saveNewComment(video, value) {
  return async function saveNewCommentThunk(dispatch, getState) {
    const response = await addComment(video, value)
  }
}

export function respondToComment(videoId, comment, commentRespondValue, index) {
  return async function respondToCommentThunk(dispatch, getState) {
    const response = await respond(videoId, comment, commentRespondValue, index)
  }
}

// export function editExistingComment(video, value) {
//   return async function saveExistingCommentThunk(dispatch, getState) {
//     const response = await editComment(video, value)
//   }
// }

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
})

export default commentsSlice.reducer
