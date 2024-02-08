import { useState, useEffect } from "react";
import postCommentByArticleID from "./Utils/postCommentByArticleID";

export default function CommentAdder({ article_id }) {
  const [commentBody, setCommentBody] = useState({
    username: "",
    body: "",
  });
  const [finalCommentBody, setFinalCommentBody] = useState({
    username: "",
    body: "",
  });
  const [newComment, setNewComment] = useState(false);

  const handleFormChange = (event) => {
    event.preventDefault();
    setCommentBody((currentCommentBody) => {
      return {
        ...currentCommentBody,
        [event.target.id]: event.target.value,
        username: "grumpy19",
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalCommentBody((currentFinalCommentBody) => {
      return { ...currentFinalCommentBody, ...commentBody };
    });
  };

  useEffect(() => {
    if (finalCommentBody.body !== "") {
      postCommentByArticleID(article_id, commentBody).then((response) => {
        setFinalCommentBody({
          username: "",
          body: "",
        });
        setNewComment(true);
      });
    }
  }, [finalCommentBody]);

  if (newComment === false) {
    return (
      <>
        <form className="add-comment" onSubmit={handleSubmit}>
          <h4>add your comment</h4>
          <input
            placeholder="What are your thoughts?"
            type="text"
            id="body"
            value={commentBody.body}
            onChange={handleFormChange}
            required
          />
          <button type="submit">comment</button>
        </form>
      </>
    );
  } else {
    return (
      <div className="add-comment">
        <h4>thanks for your comment</h4>
        <button
          onClick={() => {
            setNewComment(false);
          }}
        >
          add another comment
        </button>
      </div>
    );
  }
}
