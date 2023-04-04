import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Moment from "react-moment"
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai"
import { MdArrowDropDown, MdEdit } from "react-icons/md"
import {
  editExistingComment,
  respondToComment,
} from "../../features/comments/commentsSlice"

const Comment = ({ videoId, index, comment }) => {
  const dispatch = useDispatch()

  const [showResponses, setShowResponses] = useState(false)
  const [commentRespondOpen, setCommentRespondOpen] = useState(false)
  const [commentRespondValue, setCommentRespondValue] = useState("")

  const isDislikesVisible = true

  const handleCommentRespond = (e, comment, index) => {
    e.preventDefault()
    if (!commentRespondValue) return
    dispatch(respondToComment(videoId, comment, commentRespondValue, index))
    setCommentRespondValue("")
  }

  const cancelCommentRespond = () => {
    setCommentRespondOpen(false)
    setCommentRespondValue("")
  }

  const handleEditComment = (comment) => {
    console.log("todo")
  }

  return (
    <li className="comment-item">
      <p className="channel-avatar">{comment.channel.channelName.charAt(0)}</p>
      <div className="comment-item-inner">
        <div className="comment">
          <div className="comment-details">
            <div className="row">
              <p className="channel-name">{comment.channel.channelName}</p>
              <span className="date">
                <Moment fromNow>{comment.date}</Moment>
              </span>
              {comment.isEdited && <span className="is-edited">(edited)</span>}
            </div>
            <p className="row comment-content">{comment.content}</p>
          </div>
          {comment.channel.channelId == 0 && (
            <button
              className="edit-comment-btn"
              onClick={() => handleEditComment(comment)}
            >
              <MdEdit />
            </button>
          )}
        </div>
        <div className="comment-cta row">
          <button className="like-comment-btn">
            <AiOutlineLike /> <span>{comment.likes}</span>
          </button>
          <button className="dislike-comment-btn">
            <AiOutlineDislike />{" "}
            {isDislikesVisible ? <span>{comment.dislikes}</span> : ""}
          </button>
          <button
            onClick={() => setCommentRespondOpen(true)}
            className="respond-to-comment-btn"
          >
            Respond
          </button>
        </div>
        {commentRespondOpen && (
          <div className="row comment-respond-container">
            <p className="user-avatar">S</p>
            <form
              className="comment-respond-form"
              onSubmit={(e) => handleCommentRespond(e, comment, index)}
            >
              <textarea
                name="commentRespondInput"
                id="comment-respond-input"
                className="comment-respond-input"
                placeholder="Add comment..."
                rows="1"
                value={commentRespondValue}
                onChange={(e) => setCommentRespondValue(e.target.value)}
              ></textarea>
              <div className="btns">
                <button onClick={cancelCommentRespond} className="cancel-btn">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!commentRespondValue}
                >
                  Respond
                </button>
              </div>
            </form>
          </div>
        )}
        {comment.responses.length > 0 && (
          <button
            className="toggle-comment-responses-btn"
            onClick={() => setShowResponses(!showResponses)}
          >
            <MdArrowDropDown
              style={{
                transform: showResponses && "rotateZ(180deg)",
              }}
            />{" "}
            {comment.responses.length}{" "}
            {comment.responses.length === 1 ? "response" : "responses"}
          </button>
        )}
        {showResponses && (
          <ul className="comment-responses">
            {comment.responses.map((response, index) => {
              return (
                <li key={index} className="comment-response">
                  <p className="channel-avatar">
                    {response.channel.channelName.charAt(0)}
                  </p>
                  <div className="response-details">
                    <div className="row">
                      <p className="channel-name">
                        {response.channel.channelName}
                      </p>
                      <span className="date">
                        <Moment fromNow>{response.date}</Moment>
                      </span>
                      <span className="is-edited">(edited)</span>
                    </div>
                    <p className="row response-content">{response.content}</p>
                    <div className="response-cta row">
                      <button className="like-comment-btn">
                        <AiOutlineLike /> <span>{response.likes}</span>
                      </button>
                      <button className="dislike-comment-btn">
                        <AiOutlineDislike />{" "}
                        {isDislikesVisible ? response.dislikes : ""}
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </li>
  )
}

export default Comment
