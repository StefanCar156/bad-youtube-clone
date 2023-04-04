export async function fetchVideos() {
  const url = "http://localhost:8000/videos/"

  const res = await fetch(url)
  const data = await res.json()

  return data
}
