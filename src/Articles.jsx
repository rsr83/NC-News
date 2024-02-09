import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import fetchArticles from "./Utils/fetchArticles";
import fetchTopics from "./Utils/fetchTopics";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Articles() {
  const [articlesList, setArticlesList] = useState([]);
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOptions = ["created_at", "comment_count", "votes"];
  const orderOptions = ["ASC", "DESC"];

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(
      searchParams.get("topic"),
      searchParams.get("sort_by"),
      searchParams.get("order")
    ).then(({ articles }) => {
      setArticlesList(articles);
      setIsLoading(false);
    });
  }, [searchParams]);

  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopicsList(topics);
    });
  }, []);

  return (
    <>
      <div className="topics">
        <form action={"/"}>
          <div>
            <label>select topic:</label>
            <select name="topic" id="topic">
              {topicsList.map((topic) => {
                return <option value={topic.slug}>{topic.slug}</option>;
              })}
            </select>
          </div>
          <div>
            <label>sort articles by:</label>
            <select name="sort_by" id="sort_by">
              {sortOptions.map((sort) => {
                return <option value={sort}>{sort}</option>;
              })}
            </select>
          </div>
          <div>
            <label>order articles by:</label>
            <select name="order" id="order">
              {orderOptions.map((order) => {
                return <option value={order}>{order}</option>;
              })}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
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
