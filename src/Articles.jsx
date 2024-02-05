import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    fetch("https://rafaels-nc-news.onrender.com/api/articles")
      .then((response) => {
        return response.json();
      })
      .then(({ articles }) => {
        setArticlesList(articles);
      });
  }, []);

  return (
    <>
      {articlesList.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </>
  );
}
