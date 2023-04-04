import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadHomeVideos, selectHomeVideos } from "../../features/home/homeSlice"
import VideoCard from "../../components/VideoCard/VideoCard"
import "./home.scss"

const Home = () => {
  const dispatch = useDispatch()

  const videos = useSelector(selectHomeVideos)

  useEffect(() => {
    dispatch(loadHomeVideos())
  }, [])

  return (
    <div className="home">
      {videos?.map((video) => {
        return <VideoCard key={video.id} video={video} />
      })}
    </div>
  )
}

export default Home
