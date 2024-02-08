import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchArticlesByTopic from "./Utils/fetchArticlesByTopic";
import ArticleCard from "./ArticleCard";

export default function ArticleListByTopic() {
  const { topic } = useParams();
  const [articlesByTopicList, setArticlesByTopicList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesByTopic(topic).then(({ articles }) => {
      setArticlesByTopicList(articles);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        articlesByTopicList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      )}
    </>
  );
}
