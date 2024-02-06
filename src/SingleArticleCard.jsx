import { Link } from "react-router-dom";

export default function SingleArticleCard({ singleArticle }) {
  const {
    article_id,
    article_img_url,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = singleArticle;

  return (
    <>
      <div className="article-card">
        <img src={article_img_url}></img>
        <h2>Title: {title}</h2>
        <h4>Topic: {topic}</h4>
        <h4>Article_ID: {article_id}</h4>
        <h4>Author: {author}</h4>
        <h4>Created at: {created_at.slice(0, 10)}</h4>
        <h4>Total Comments: {comment_count}</h4>
        <h4>Votes: {votes}</h4>
      </div>
    </>
  );
}
