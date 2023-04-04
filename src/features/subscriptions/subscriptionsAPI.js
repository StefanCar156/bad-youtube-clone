export async function fetchSubscriptionVideos() {
  const url = "http://localhost:8000/videos/"

  const res = await fetch(url)
  const data = await res.json()

  const subedChannelsVideos = await data.filter(
    (video) => video.channel.subscribed == true
  )

  return subedChannelsVideos
}
