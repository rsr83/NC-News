import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const {
    article_id,
    article_img_url,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  } = article;

  return (
    <>
      <div className="article-card">
        <img src={article_img_url}></img>
        <h2>{title}</h2>
        <Link to={`/articles/${article_id}`}>
          See Article Details and Comments
        </Link>
        ;
      </div>
    </>
  );
}
