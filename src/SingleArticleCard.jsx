import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import fetchCommentsByArticleID from "./Utils/fetchCommentsByArticleID";
import ArticleVote from "./ArticleVote";

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
  const [votesActual, setVotesActual] = useState(votes);
  let countComments = 0;

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
          author: {author} <br />
          topic: {topic} <br />
          created at: <br />
          {created_at.slice(0, 10)} <br />
          votes: {votesActual}
        </h6>
        <ArticleVote
          key={article_id}
          article_id={article_id}
          votesActual={votesActual}
          setVotesActual={setVotesActual}
        />
      </div>
      <div>
        <h3>comments:</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          commentsList.map((comment) => {
            countComments++;
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })
        )}
      </div>
      <div>
        {countComments === 0 ? (
          <h3>no comments for this article yet...</h3>
        ) : (
          <h3>total comments: {countComments}</h3>
        )}
      </div>
    </>
  );
}
