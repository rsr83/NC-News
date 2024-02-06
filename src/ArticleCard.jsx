import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const { article_id, article_img_url, title } = article;

  return (
    <>
      <div className="article-card">
        <Link to={`/articles/${article_id}`}>
          <img src={article_img_url}></img>
          <h2>{title}</h2>
        </Link>
        ;
      </div>
    </>
  );
}
