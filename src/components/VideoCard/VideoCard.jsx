import React from "react"
import Moment from "react-moment"
import { Link } from "react-router-dom"
import "./videoCard.scss"

const Video = ({ video, className }) => {
  const { id, title, channel, thumbnail, date } = video

  return (
    <Link to={`/watch/${id}`}>
      <div className={`video-card ${className}`}>
        <img className="video-card-thumbnail" src={thumbnail} alt={title} />
        <div className="video-card-info">
          <span className="video-card-channel-img">
            {channel.channelName.charAt(0)}
          </span>
          <div className="right">
            <p className="video-card-title">{title}</p>
            <div className="video-card-channel">{channel.channelName}</div>
            <div className="bottom">
              <p className="video-card-views">18.000 views</p> &#x2022;{" "}
              <p className="video-card-release-date">
                <Moment fromNow>{date}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Video
