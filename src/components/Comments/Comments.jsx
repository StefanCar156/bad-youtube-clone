import React from "react"
import { useDispatch } from "react-redux"
import { saveNewComment } from "../../features/comments/commentsSlice"
import { useState } from "react"

import "./comments.scss"
import Comment from "../Comment/Comment"

const Comments = ({ video }) => {
  const dispatch = useDispatch()

  const [addCommentValue, setAddCommentValue] = useState("")

  const handleAddComment = (e) => {
    e.preventDefault()
    if (!addCommentValue) return
    dispatch(saveNewComment(video, addCommentValue))
    setAddCommentValue("")
  }

  return (
    <div className="comments-container">
      <div className="row">
        <p className="number-of-comments">{video.comments?.length} comments</p>
        {/* Ovde ce da bude neki dropdown za sortiranje */}
        <div className="sort-by-container">
          <select name="sortBy" id="sort-by">
            <option value="popular">Popular</option>
            <option value="new">New</option>
          </select>
        </div>
      </div>
      <div className="row add-comment-container">
        <p className="user-avatar">S</p>
        <form className="add-comment-form" onSubmit={handleAddComment}>
          <textarea
            name="addCommentInput"
            id="add-comment-input"
            className="add-comment-input"
            placeholder="Add comment..."
            rows="1"
            value={addCommentValue}
            onChange={(e) => setAddCommentValue(e.target.value)}
          ></textarea>
          {addCommentValue && (
            <div className="btns">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setAddCommentValue("")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="submit-btn"
                disabled={!addCommentValue}
              >
                Comment
              </button>
            </div>
          )}
        </form>
      </div>
      <ul className="comments-list">
        {video.comments?.map((comment, index) => {
          return (
            <Comment
              key={index}
              videoId={video.id}
              index={index}
              comment={comment}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Comments
