export async function fetchChannel(id) {
  const url = `http://localhost:8000/channels/${id}`

  const res = await fetch(url)
  const data = await res.json()

  return data
}
