import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  loadVideo,
  selectVideo,
  reactToVideo,
  handleSubscribe,
} from "../../features/video/videoSlice"
import { loadHomeVideos, selectHomeVideos } from "../../features/home/homeSlice"
import VideoCard from "../../components/VideoCard/VideoCard"
import { BsBell } from "react-icons/bs"
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai"
import { RiShareForwardLine, RiPlayListAddLine } from "react-icons/ri"
import "./video.scss"
import Moment from "react-moment"
import Comments from "../../components/Comments/Comments"
import { toast } from "react-toastify"

const Video = () => {
  const dispatch = useDispatch()
  const { videoID } = useParams()

  const videos = useSelector(selectHomeVideos)
  const video = useSelector(selectVideo)

  const [videoState, setVideoState] = useState({})

  const [isLoading, setIsLoading] = useState(true)

  const [showDescription, setShowDescription] = useState(false)

  const [currentVideo, setCurrentVideo] = useState({})

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast("Link copied to clipboard")
  }

  useEffect(() => {
    setIsLoading(true)
    dispatch(loadVideo(videoID))
    dispatch(loadHomeVideos())
    setIsLoading(false)
  }, [video])

  return (
    <div className="video">
      <div className="video-main">
        <div className="video-wrapper">
          <div className="video-container">
            <video src={video.src} className="video-player"></video>
          </div>
          <h1 className="video-title">{video.title}</h1>
          <div className="row cta-row">
            <div className="video-channel">
              <span className="channel-avatar">{video.title?.charAt(0)}</span>
              <div className="channel-details">
                <p className="channel-name">{video.channel?.channelName}</p>
                <p className="channel-subscribers">
                  {video.channel?.subscribers} subscribers
                </p>
              </div>
              <button
                className={`subscribe-btn ${
                  video.channel?.subscribed && "subscribe-btn-active"
                }`}
                onClick={() => dispatch(handleSubscribe(video))}
              >
                <BsBell />
                <span>
                  {video.channel?.subscribed ? "Subscribed" : "Subscribe"}
                </span>
              </button>
            </div>
            <div className="video-cta">
              <div className="reaction-btns">
                <button
                  className="like-btn"
                  onClick={() => dispatch(reactToVideo(video, "like"))}
                >
                  {video.reaction === "like" ? (
                    <>
                      {" "}
                      <AiFillLike /> {video.likes}{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <AiOutlineLike /> {video.likes}{" "}
                    </>
                  )}
                </button>
                <button
                  className="dislike-btn"
                  onClick={() => dispatch(reactToVideo(video, "dislike"))}
                >
                  {video.reaction === "dislike" ? (
                    <>
                      {" "}
                      <AiFillDislike /> {video.dislikes}{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <AiOutlineDislike /> {video.dislikes}{" "}
                    </>
                  )}
                </button>
              </div>
              <button className="share-btn" onClick={handleShare}>
                <RiShareForwardLine /> Share
              </button>
              <button className="add-to-playlist-btn">
                <RiPlayListAddLine /> Add to playlist
              </button>
            </div>
          </div>
        </div>
        <div className="description-container">
          <div className="description-inner">
            <div className="row">
              <p>75k views</p>
              <p className="video-date-posted">
                {showDescription ? (
                  <Moment format="DD/MM/YYYY">{video.date}</Moment>
                ) : (
                  <Moment fromNow>{video.date}</Moment>
                )}
              </p>
            </div>
            <div className="video-description">
              <div
                className={`description-content-wrapper ${
                  showDescription && "show-description"
                }`}
              >
                <p className="description-content">{video.description}</p>
              </div>
              <button
                className="toggle-more-btn"
                onClick={() => setShowDescription(!showDescription)}
              >
                {showDescription ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
        </div>
        <Comments video={video} />
      </div>
      <div className="recommendations">
        {videos
          .filter((video) => video.id != videoID)
          .map((video, index) => {
            return (
              <VideoCard
                key={index}
                video={video}
                className="recommendation-card"
              />
            )
          })}
      </div>
    </div>
  )
}

export default Video
