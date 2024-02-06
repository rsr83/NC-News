import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import fetchCommentsByArticleID from "./Utils/fetchCommentsByArticleID";

export default function SingleArticleCard({ singleArticle }) {
  const {
    article_id,
    article_img_url,
    author,
    created_at,
    title,
    topic,
    votes,
    body,
  } = singleArticle;

  const [commentsList, setCommentsList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticleID(article_id).then((comments) => {
      setCommentsList(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      <div className="article-card">
        <img src={article_img_url}></img>
        <h2>{title}</h2>
        <h4>{body}</h4>
        <h6>
          author: {author} - topic: {topic} - created at:{" "}
          {created_at.slice(0, 10)} - votes: {votes}
        </h6>
      </div>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          commentsList.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })
        )}
      </div>
    </>
  );
}
