import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "./Utils/fetchArticles";

export default function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then(({ articles }) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        articlesList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      )}
    </>
  );
}
