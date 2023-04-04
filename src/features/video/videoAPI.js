export async function fetchVideo(id) {
  const url = `http://localhost:8000/videos/${id}`

  const res = await fetch(url)
  const data = await res.json()

  return data
}

export async function react(video, value) {
  const url = `http://localhost:8000/videos/${video.id}`

  let updatedReaction

  if (value === "like") {
    if (video.reaction === "like") {
      updatedReaction = null
    } else {
      updatedReaction = "like"
    }
  } else if (value === "dislike") {
    if (video.reaction === "dislike") {
      updatedReaction = null
    } else {
      updatedReaction = "dislike"
    }
  }

  const updatedObject = { ...video, reaction: updatedReaction }

  const putRequestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObject),
  }

  const response = await fetch(url, putRequestOptions)
}
export async function subscribe(video) {
  const url = `http://localhost:8000/videos/${video.id}`

  const updatedObject = {
    ...video,
    channel: { ...video.channel, subscribed: !video.channel.subscribed },
  }

  const putRequestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObject),
  }

  const response = await fetch(url, putRequestOptions)
}
