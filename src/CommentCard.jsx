import { useState, useEffect } from "react";
import deleteCommentByID from "./Utils/deleteCommentByID";

export default function CommentCard({ comment, commentList, setCommentList }) {
  const [deleteComment, setDeleteComment] = useState(false);
  const [hasDeleted, setHasDeleted] = useState(false);
  const { body, author, created_at, comment_id } = comment;
  const condition = author === "grumpy19";

  useEffect(() => {
    if (deleteComment === true) {
      deleteCommentByID(comment_id).then(() => {
        setDeleteComment(false);
      });
    }
  }, [deleteComment]);

  function handleClickDelete() {
    setDeleteComment(true);
    setHasDeleted(true);
  }

  if (hasDeleted === false) {
    return (
      <div className="comment-card">
        <p>{body}</p>
        <p>comment by: {author}</p>
        <p>created at: {created_at.slice(0, 10)}</p>
        {condition ? (
          <button
            onClick={() => {
              handleClickDelete();
            }}
          >
            delete
          </button>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return <p>comment deleted</p>;
  }
}
