import { fetchVideo } from "../video/videoAPI"

export async function addComment(video, value) {
  const url = `http://localhost:8000/videos/${video.id}`

  const newComment = {
    channel: {
      channelId: 0,
      channelName: "Stefan",
    },
    content: value,
    likes: 0,
    dislikes: 0,
    date: new Date(),
    responses: [],
  }

  const updatedObject = { ...video, comments: [...video.comments, newComment] }

  const putRequestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObject),
  }

  const response = await fetch(url, putRequestOptions)
}

export async function respond(videoId, comment, commentRespondValue, index) {
  const url = `http://localhost:8000/videos/${videoId}`

  let newVideo = await fetchVideo(videoId)

  const commentResponse = {
    channel: {
      channelId: 0,
      channelName: "Stefan",
    },
    content: commentRespondValue,
    likes: 0,
    dislikes: 0,
    date: new Date().toString(),
  }

  const updatedComment = {
    ...comment,
    responses: [...comment.responses, commentResponse],
  }

  let updatedComments = newVideo.comments
  updatedComments[index] = updatedComment

  let updatedObject = { ...newVideo, comments: updatedComments }

  const putRequestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObject),
  }
  const response = await fetch(url, putRequestOptions)
}

// export async function editComment(video, value) {
//   const url = `http://localhost:8000/videos/${video.id}`

//   const newComment = {
//     channel: {
//       channelId: 0,
//       channelName: "Stefan",
//     },
//     content: value,
//     likes: 0,
//     dislikes: 0,
//     date: new Date(),
//     responses: [],
//   }

//   const updatedObject = { ...video, comments: [...video.comments, newComment] }

//   const putRequestOptions = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedObject),
//   }

//   const response = await fetch(url, putRequestOptions)
// }
