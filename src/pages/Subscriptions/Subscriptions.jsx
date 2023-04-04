import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  loadSubsciptionsVideos,
  selectSubscriptionsVideos,
} from "../../features/subscriptions/subscriptionsSlice"
import VideoCard from "../../components/VideoCard/VideoCard"
import "./subscriptions.scss"

const Subscriptions = () => {
  const dispatch = useDispatch()

  const subscriptionsVideos = useSelector(selectSubscriptionsVideos)

  useEffect(() => {
    dispatch(loadSubsciptionsVideos())
  }, [])

  return (
    <div className="subscriptions">
      {subscriptionsVideos?.map((video) => {
        return <VideoCard key={video.id} video={video} />
      })}
    </div>
  )
}

export default Subscriptions
