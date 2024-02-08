import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "./Utils/fetchArticles";
import fetchTopics from "./Utils/fetchTopics";
import { Link } from "react-router-dom";

export default function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then(({ articles }) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopicsList(topics);
    });
  }, []);

  return (
    <>
      <div className="topics">
        <h3>filter articles by topic:</h3>
        {topicsList.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles/topic/${topic.slug}`}>
              <p>{topic.slug}</p>
            </Link>
          );
        })}
      </div>
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
